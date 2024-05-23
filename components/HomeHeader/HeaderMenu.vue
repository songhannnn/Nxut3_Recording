<!--
 * @Author: songhannn
 * @Date: 2024-05-21 12:04:38
 * @LastEditors: songhannn
 * @LastEditTime: 2024-05-21 14:15:12
 * @FilePath: \nuxt-recording\components\HomeHeader\HeaderMenu.vue
 * @Description: 
 * 
-->
<template>
    
</template>

<script setup lang='ts'>

const route = useRoute();
/* console.log('clothingTopLevelData', clothingTopLevelData);
console.log('brandsMenu', brandsMenu);
console.log('collectionMenu', collectionMenu);
console.log('filter', filter); */

const props = defineProps<{
    clothingTopLevelData: ResOptions<topLevel[]>,
    brandsMenu: ResOptionsTwoDataArray<brandMenu>,
    collectionMenu: ResOptionsTwoDataArray<collectionMenu>,
    filter: ResOptions<leftFilter>,
}>()
// console.log(props.menu);


let brandsSubCollection = reactive<{ info: Ref<ResOptions<brandDetail>>[] }>({
    info: []
})

/* const ids = [1, 4, 6]

brandsSubCollection.info = await Promise.all(ids.map(async (id) => {
    const { data: brand }: { data: Ref<ResOptions<brandDetail>> } = await GetBrandsDetail({ id: id })
    return brand;
})); */
// console.log('brandsSubCollection.info', brandsSubCollection.info);


// let menAndWomenMenu = reactive<{ info: leftFilterCategory[] }>({
//     info: []
// })

/* watch(props.filter, (filterData) => {
    if (filterData && filterData.data.categorys.length) {
        menAndWomenMenu.info = filterData.data.categorys
    }
}, {
    immediate: true
}) */

</script>

<!-- <style scoped lang="less">
.menu {
    .has-mega-menu {
        .mega-menu {
            .mega-menu__row {
                .mega-menu__column {
                    max-height: 490px;
                }
            }
        }
    }

    .haveMutlColumn {
        .mega-menu__column {
            // 待:小屏幕显示不全
            // min-width: auto;
            max-width: 105px;
            word-wrap: break-word;
            padding: 0;
        }
    }

}
</style> -->