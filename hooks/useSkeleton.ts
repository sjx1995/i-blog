/*
 * @Description: 设置loading状态
 * @Author: Sunly
 * @Date: 2023-09-12 11:28:40
 */
type ISkeletonType = "titleCard" | "article";

const loading = ref(true);
const skeletonType = ref<ISkeletonType>("titleCard");

const useSkeleton = (type: ISkeletonType) => {
  onBeforeRouteLeave(() => {
    loading.value = true;
    skeletonType.value = type;
  });

  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 400);
  });
};

export { loading, skeletonType, useSkeleton };
