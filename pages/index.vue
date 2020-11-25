<template>
  <div>
    <h1>Hello world!</h1>
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
