<template>
  <div class="FooterBox" :key="locale">
    <FooterMain :footerInfo="footerInfo" :clothingTopLevelData="clothingTopLevelData" :infoCategory="infoCategory">
    </FooterMain>
  </div>
</template>

<script setup lang='ts'>
import { recordRequestTime } from '~/untils/tools';

const { locale } = useI18n();
// console.log('locale', locale);
const startTime = Date.now();
console.time('footer');
const [
  { data: clothingTopLevelData },
  { data: footerInfo },
  { data: infoCategory }
] = await Promise.all([
  recordRequestTime(useServerRequest<ResOptions<topLevel[]>>(Api.getWomenMenCategory, { body: { parent_id: 0, gender_ids: [] }, lazy: true }), startTime, 'clothingTopLevelData'),
  recordRequestTime(useServerRequest<ResOptions<siteBaseInfo>>(Api.getAccessRestrictions, { lazy: true }), startTime, 'AccessRestrictions'),
  recordRequestTime(useServerRequest<any>(Api.getInfoCategory, { lazy: true }), startTime, 'InfoCategory')
])
console.timeEnd('footer');
</script>

<style scoped lang="less">
.FooterBox {}
</style>