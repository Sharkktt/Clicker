const app = {
    data() {
        return {
            scoreClick: 50000,
            scorePLus: 1,
            scinOne: undefined,
            scinTwo: undefined,
            scinThree: undefined,
            scinFour: undefined,
            ScinOne: undefined,

            ShopContView: undefined


        }
    },
    methods: {
        clickerBtn() {
            this.scoreClick = this.scoreClick + this.scorePLus

        },
        btnShop1lvl() {
            if (this.scoreClick >= 20) {
                this.scorePLus = this.scorePLus + 5
                this.scoreClick = this.scoreClick - 20






            }
        },

        btnShop2lvl() {
            if (this.scoreClick >= 40) {
                this.scorePLus = this.scorePLus + 10
                this.scoreClick = this.scoreClick - 40






            }

        },
        btnShop3lvl() {
            if (this.scoreClick >= 80) {
                this.scorePLus = this.scorePLus + 25
                this.scoreClick = this.scoreClick - 80






            }

        },
        btnShop4lvl() {
            if (this.scoreClick >= 100) {
                this.scorePLus = this.scorePLus + 30
                this.scoreClick = this.scoreClick - 100






            }








        },




        scinOneOn() {
            if (this.scoreClick >= 500) {
                this.scoreClick = this.scoreClick - 500
                this.scinOne = false
        }


        
    },
    scinTwoOn() {
        if (this.scoreClick >= 1800) {
            this.scoreClick = this.scoreClick - 1800
            this.scinTwo = false
        }
        
        
        
    },
    scinThreeOn() {
        if (this.scoreClick >= 3000) {
            this.scoreClick = this.scoreClick - 3000
            this.scinThree = false
        }


    },
    scinFourOn() {
        if (this.scoreClick >= 50000) {
            this.scoreClick = this.scoreClick - 50000
            this.scinFour = false
        }


    },
    ShopContOn() {
        this.ShopContView = true
        
    },
    ShopContOf() {
        this.ShopContView = undefined
        
    },
    
},
    
}
   


Vue.createApp(app).mount('#conectvue')
