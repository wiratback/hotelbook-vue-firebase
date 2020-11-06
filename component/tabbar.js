Vue.component('tabbar',{
    props:['stateno'],
    methods: {
        logoutfn(){
            firebase.auth().signOut()
            .catch(error => {
                alert(error.message);
              });
        },

        chkauthfn(){
            firebase.auth().onAuthStateChanged(user => {
                if (!user) {
                    window.location.replace('login.html');
                } 
              });
        }
    },
    mounted(){
        this.chkauthfn();
    },
    template:`
    <div class="container-fluid bg-success text-white fixed-bottom" style="padding: 8px;"> 
        <div class="row">
            <div class="col text-center" @click="window.location.replace('index.html')">
                <i v-if="stateno==1" class="fas fa-hotel text-warning" style="font-size:2em;"></i>
                <i v-else class="fas fa-hotel text-white" style="font-size:2em;"></i>
            </div>
            <div class="col text-center" @click="window.location.replace('booking.html')">
                <i v-if="stateno==2" class="fas fas fa-book text-warning" style="font-size:2em;"></i>
                <i v-else class="fas fa-book text-white" style="font-size:2em;"></i>
            </div>
            <div class="col text-center" @click="window.location.replace('rooms.html')">
                <i v-if="stateno==3" class="fas fa-door-closed text-warning" style="font-size:2em;"></i>
                <i v-else class="fas fa-door-closed text-white" style="font-size:2em;"></i>
            </div>
            <div class="col text-center" @click="logoutfn">
            <i class="fas fa-sign-out-alt text-white" style="font-size:2em;"></i>
            </div>
        </div>
    </div>
    `
  
  });