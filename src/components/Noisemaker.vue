<template lang="pug">
  .container
    .card
      .card-header
        h3.pt-2 2020-04-22-Noisemaker
      .card-body
        .row
          .col-3
            label harmonicity 
          .col-2
            label {{settings.harmonicity}}
          .col-7
            b-form-input(v-model="settings.harmonicity" type='range' min="0" max="15" @change="updateSettings()")
        .row
          .col-3
            label Modulation Index 
          .col-2
            label {{settings.modulationIndex}}
          .col-7
            b-form-input(v-model="settings.modulationIndex" type='range' min="0" max="15" @change="updateSettings()")
      .card-footer
        .row
          .col.m-1.border(v-for="chord in chords" @click="play(chord)") {{chord}}

        .row
          .col-12
            | Press A through G, or click a button.
  </template>

<script>
import * as Tone from "tone";
export default {
  data() {
    return {
      synth: null,
      chords: [],
      settings: {
        harmonicity: 3,
        modulationIndex: 5
      }
    };
  },
  created() {
    this.loadChords();
    this.updateSettings();
    window.addEventListener("keypress", e => {
      if (
        e.key === "a" ||
        e.key === "b" ||
        e.key === "c" ||
        e.key === "d" ||
        e.key === "e" ||
        e.key === "f" ||
        e.key === "g"
      ) {
        this.play(e.key.toUpperCase() + "4");
      }
    });
  },
  methods: {
    play(chord) {
      this.synth.triggerAttackRelease(chord, "2n");
    },
    updateSettings() {
      this.synth = new Tone.FMSynth(this.settings).toDestination();
    },
    loadChords() {
      this.chords = [
        "A1",
        "B1",
        "C1",
        "D1",
        "E1",
        "F1",
        "G1",
        "A2",
        "B2",
        "C2",
        "D2",
        "E2",
        "F2",
        "G2",
        "A3",
        "B3",
        "C3",
        "D3",
        "E3",
        "F3",
        "G3",
        "A4",
        "B4",
        "C4",
        "D4",
        "E4",
        "F4",
        "G4",
        "A5",
        "B5",
        "C5",
        "D5",
        "E5",
        "F5",
        "G5"
      ];
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
