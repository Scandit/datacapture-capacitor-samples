<script setup>

import {useAppState} from "./AppState";
import {useRouter} from "vue-router";
import {computed} from "vue";

const appState = useAppState()
const router = useRouter()

function handleResumeClick() {
  if (appState.exitPressed) {
    appState.resetRequired = true
    appState.exitPressed = false
  }
  router.back()
}

function handleClearListClick() {
  appState.clearRequired = true
  router.back()
}

const scanCount = computed(() => {
  const l = appState.codes.length
  return l === 1 ? `Item (1)` : `Items (${l})`
})

</script>

<template>

  <div class="container">
    <div class="header">
      <p>Scanned Items</p>
    </div>
    <div class="scan-count">
      {{scanCount}}
    </div>
    <div class="results">
      <div v-for="(code, index) in appState.codes">
        <div class="result-item">
          <div class="result-item-image"></div>
          <div class="result-item-body">
            <span>Item {{index + 1}}</span>
            <br>
            <span class="result-item-symbology">{{code.symbology}}: {{code.data}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-list">
      <button class="resume-scanning-btn" @click="handleResumeClick()">
        {{appState.exitPressed ? 'START NEW SCANNING' : 'RESUME SCANNING'}}
      </button>
      <button class="clear-list-btn" @click="handleClearListClick()">
        CLEAR LIST
      </button>
    </div>
  </div>

</template>

<style scoped>

.container {
  background-color: white;
  display: flex;
  flex-direction: column;
}

.results {
  background-color: #FFF;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.result-item {
  display: flex;
  font-size: 16px;
  color: black;
  font-weight: 600;
  padding: 16px;
}

.result-item-image {
  height: 48px;
  min-height: 48px;
  width: 48px;
  min-width: 48px;
  background-color: #F1F5F8;
}

.result-item-body {
  padding-left: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
  overflow: hidden;
}

.result-item-symbology {
  flex: 1;
  color: #8795A1;
  font-size: 14px;
  text-transform: uppercase;
  text-overflow: ellipsis;
  margin-top: 1px;
}

.btn-list {
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.resume-scanning-btn {
  font-size: 16px;
  font-weight: bold;
  height: 51px;
  background-color: black;
  color: white;
  border: 2px solid black;
  margin-bottom: 10px;
}

.clear-list-btn {
  font-size: 16px;
  font-weight: bold;
  color: black;
  height: 51px;
  background-color: white;
  border: 2px solid black;
}

.header {
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.scan-count {
  color: #3D4852;
  font-size: 14px;
  font-weight: 600;
  padding-inline-start: 16px;
  padding-top: 16px;
  padding-bottom: 10px;
}

</style>