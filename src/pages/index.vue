<template>
  <div>
    <VCard
      class="mb-6"
      title="Kick start your project 🚀"
    >
      <VCardText>หกดหกดAll the best for your new project.</VCardText>
      <VCardText>
        Please make sure to read our <a
          href="https://demos.pixinvent.com/vuexy-vuejs-admin-template/documentation/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-decoration-none"
        >
      
          Template Documentation
        </a> to understand where to go from here and how to use our template.  <VBtn @click="test">sdfsdfsdf</VBtn>
      </VCardText>
    </VCard>

    <VCard title="Want to integrate JWT? 🔒">
      <VCardText>We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.</VCardText>
      <VCardText>Please read our  JWT Documentation to get more out of JWT authentication.</VCardText>
    </VCard>
  </div>
</template>
<script setup  >

 let postData = {
  test:'pppp'
 }
 //global().$XXX = 'beckham'
 console.log(global().$MCNET)
const { proxy } = getCurrentInstance()  // ไม่ต้อง import fn

console.log(proxy.$fn.random())
const  data  = await  Api('main/info' ,postData )


</script>

<script>
export default {

  meta: {
    layout: 'default',
    requiresAuth: true,
  },
  methods: {
    test() {
      console.log('Option API this.$fn.random():', this.$fn.random())

    }
  }
}
</script>
