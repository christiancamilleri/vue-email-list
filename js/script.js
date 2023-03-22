const { createApp } = Vue

  createApp({
    data() {
      return {
        myEmailArray: [],
      }
    },
    mounted: function() {

        // ciclo per riempire array di mail
        for(let i = 0; i < 10; i++) {
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((res) => {
                // console.log(res.data.response)

                this.myEmailArray.push(res.data.response);

                
            })
        }
        console.log(this.myEmailArray)
    },
  }).mount('#app')