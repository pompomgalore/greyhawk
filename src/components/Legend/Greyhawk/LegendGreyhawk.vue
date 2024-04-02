<script setup lang="ts">
import PoliticalDivisions from './LegendGreyhawkPoliticalDivisions.vue'
</script>

<template>
  <div class="legend-greyhawk">
    <h1>Greyhawk</h1>
    <p>
      <a href="https://patreon.com/PomPomGalli" target="_blank">Pom Pom Galli</a> 2024
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        style="
          display: inline-block;
          line-height: 0;
          margin-left: 0.25em;
          vertical-align: text-bottom;
        "
      >
        <img
          decoding="async"
          loading="lazy"
          src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-sa.png"
          target="_blank"
          width="57"
          height="20"
        />
      </a>
    </p>
    <p>
      Vector by
      <a
        href="https://batintheattic.blogspot.com/2021/12/happy-needfest-digital-darlene-greyhawk.html"
        target="_blank"
        >Zach Henderson & Robert Conley</a
      >, map by <a href="http://darlenetheartist.com" target="_blank">Darlene</a>.
    </p>
    <p style="font-size: small">
      <a href="https://pompomgalore.github.io/greyhawk">pompomgalore.github.io/greyhawk</a> is
      unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by
      Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the
      Coast LLC.
    </p>
    <political-divisions />
  </div>
</template>
