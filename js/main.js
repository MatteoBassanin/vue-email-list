const { createApp } = Vue

  createApp({
    data() {
      return {
        randomEmail: '',
        emailArray:[],
      }
    },
    mounted() {
    
    for(i = 0 ; i < 10 ; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( (response) => {

                this.randomEmail = response.data.response;
                this.emailArray.push(this.randomEmail);
                
                
            
        }
    )
    };
    console.log(this.emailArray)
  }
  }).mount('#app')