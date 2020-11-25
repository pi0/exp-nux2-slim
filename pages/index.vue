<template>
  <div>
    Hello world!
    asyncData: {{ asyncData }}
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
        asyncData: 'works'
    }
  }
}
</script>
