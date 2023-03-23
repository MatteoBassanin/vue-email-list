const { createApp } = Vue

  createApp({
    data() {
      return {
        randomEmail: '',
        emailArray:[],
      }
    },methods:{
        gettingEmail(response){
            
            this.randomEmail = response.data.response;
            this.emailArray.push(this.randomEmail);
            console.log(this.emailArray);
          
     
    },
},
    mounted() {
    
    for(i = 0 ; i < 10 ; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    
    .then( (response) => {
      this.gettingEmail(response)

    }
    )
    }
    
  }
  }).mount('#app')