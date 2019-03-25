<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn @click="addBrick">brick 추가</v-btn>
        <BricksComponent ref="bricksComponent"></BricksComponent>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts" src="./Home.ts" />

<style lang='scss' scoped>
</style>


