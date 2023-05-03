<template>
<body>
    <br><br><br>
        <section class="showcase-area" id="showcase">
      <div class="showcase-container">
        <h1 class="main-title" id="home">Eat Healthy Food</h1>
        <p>Eat Healty, it is good for our health.</p>
      </div>
    </section>
        <section id="food">
      <h2>Types of food</h2>
      <div class="food-container container">
        <div class="food-type fruite">
          <div class="img-container">
            <img src="https://i.postimg.cc/yxThVPXk/food1.jpg" alt="error" />
            <div class="img-content">
              <h3>fruite</h3>
              <a
                href="https://en.wikipedia.org/wiki/Fruit"
                class="btn btn-primary"
                target="blank"
                >learn more</a
              >
            </div>
          </div>
        </div>
        <div class="food-type vegetable">
          <div class="img-container">
            <img src="https://i.postimg.cc/Nffm6Rkk/food2.jpg" alt="error" />
            <div class="img-content">
              <h3>vegetable</h3>
              <a
                href="https://en.wikipedia.org/wiki/Vegetable"
                class="btn btn-primary"
                target="blank"
                >learn more</a
              >
            </div>
          </div>
        </div>
        <div class="food-type grin">
          <div class="img-container">
            <img src="https://i.postimg.cc/76ZwsPsd/food3.jpg" alt="error" />
            <div class="img-content">
              <h3>grin</h3>
              <a
                href="https://en.wikipedia.org/wiki/Grain"
                class="btn btn-primary"
                target="blank"
                >learn more</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
        <section id="food-menu">
      <h2 class="food-menu-heading">Food Menu</h2>
      <div class="food-menu-container container">
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Chicken_adobo.jpg"
alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">Food Menu Item 1</h2>
            <p>
              This is a recipe post for Filipino Pork Adobo. It is a dish composed of pork slices cooked in soy sauce, vinegar, and garlic. 
              There are version wherein onions are also added. Adobo is a popular dish in the Philippines, along with Sinigang. Adobo, in general, 
              can be cooked using different kinds of protein.</p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img
              src="https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/15bc5c2e-635b-44d6-857f-7423d571b31d.jpg"
              alt="error"
            />
          </div>
          <div class="food-description">
            <h2 class="food-titile">Food Menu Item 2</h2>
            <p>
           Chicken Tinola is a Filipino soup dish. It involves cooking chicken pieces in ginger broth. It is a popular cold weather dish. 
           I always feel warm and cozy every time I eat it. This Filipino Chicken Soup is best enjoyed with fish sauce as dipping sauce, and a cup of warm white rice. </p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://i0.wp.com/yummyfood.ph/wp-content/uploads/2022/02/sinigang-na-baboy.jpg?resize=500%2C375&ssl=1" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">Food Menu Item 3</h2>
            <p>
             Sinigang is a sour soup native to the Philippines. This recipe uses pork as the main ingredient. Other proteins and seafood 
             can also be used. Beef, shrimp, fish are commonly used to cook sinigang. The chicken version, on the other hand, is called 
             sinampalukang manok. </p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://pinoybites.com/wp-content/uploads/2021/03/Pata-Kare-Kare-1-scaled.jpg" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">Food Menu Item 4</h2>
            <p>
              Kare Kare is a traditional Filipino stew complimented with a thick savory peanut sauce. The commonly used meats for this dish are ox 
              tail, tripe, and pork leg; on some occasions goat and chicken meat are also used. Besides the peanuts, this dish depends on the 
              shrimp paste (on the side) in order to be fully enjoyed. Traditionally, “palayok” (clay cooking pot) is used to cook this dish and it 
              is also used as serving pot.</p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/appetisers/sizzling-pork-sisig-manila/sizzling-pork-sisig-manila-main.jpg" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">Food Menu Item 5</h2>
            <p>
              Pork sisig is a popular Filipino dish. It can be considered as a main dish or an appetizer. The composition of this 
              dish is mainly of pig’s parts such as minced pork meat, ears, and face. Chicken liver, onions, and chili peppers are also added.</p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://thefoodietakesflight.com/wp-content/uploads/2020/12/kaldereta-36-500x375.png" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">Food Menu Item 6</h2>
            <p>
            Another favorite Filipino dish is the Kaldereta. It is a hearty meat dish using chevon (goat meat), beef, or pork combined with potatoes, carrots, 
            tomato sauce, and liver spread or liver paste. This is a popular dish served during special occasions and a regular in every Filipino cookbook.</p>

          </div>
        </div>
      </div>
    </section>
    <h2 class = "center">Write your daily food intake in order to maintain your healthy lifestyle.</h2>
      <div class = mid>
        <div class="col-md-6">
            <br><h3 class="text-center">Food Log</h3><br>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Date and Time</label>
                    <input type="text" class="form-control" v-model="student.name" required><br>
                </div>
                <div class="form-group">
                    <label>Food Item</label>
                    <input type="text" class="form-control" v-model="student.food" required><br>
                </div>
                <div class="form-group">
                    <label>Amount Calories</label>
                    <input type="text" class="form-control" v-model="student.amount" required><br>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
        </div>

    <br><br><br>
    <footer>
        <div class="footer-content">
            <h3 class = "DKJDM">DKJDM Developer</h3>
            <p>The company has a mission to make healthy eating accessible by providing nutritious and delicious meals, 
              snacks, and recipes that fit any dietary needs and preferences. They use all-natural, GMO-free, and fresh ingredients, 
              and offer meal plans that are affordable and convenient.</p>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; DKJDM Developer</p>
        </div>

    </footer>
</body>

</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                student: {
                   name: '',
                   food: '',
                   amount: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-student';
                
                axios.post(apiURL, this.student).then(() => {
                  this.$router.push('/view')
                  this.student = {
                    name: '',
                    food: '',
                    amount: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.center {
    text-align: center;
    font-family: "Poppins", sans-serif;
}
.mid{
padding-left: 20em;
}
.DKJDM{
  color: #aaa;
}
body{
    background-color: burlywood;
    font-family: "Poppins", sans-serif;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

.html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
}

/* ///////////..utility classes../////////// */

.container {
  max-width: 1200px;
  width: 90%;
  margin: auto;
}

.btn {
  display: inline-block;
  padding: 0.5em 1.5em;
  text-decoration: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  margin-top: 1em;
  text-transform: uppercase;
  font-weight: small;
}

.btn-primary {
  color: #fff;
  background: #16a083;
}

.btn-primary:hover {
  background: #117964;
  transition: background 0.3s ease-in-out;
}

/* ............/navbar/............ *

/* desktop mode............/// */

.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}

.navbar {
  box-shadow: 0px 5px 10px 0px #aaa;
  position: fixed;
  width: 100%;
  background: #fff;
  color: #000;
  opacity: 0.85;
  height: 50px;
  z-index: 12;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
}

.menu-items {
  order: 2;
  display: flex;
}

.menu-items li {
  list-style: none;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.menu-items a {
  text-decoration: none;
  color: #444;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.menu-items a:hover {
  color: #117964;
  transition: color 0.3s ease-in-out;
}

.logo {
  order: 1;
  font-size: 2.3rem;
  margin-bottom: 0.5rem;
}

/* ............//// Showcase styling ////......... */

.showcase-area {
  height: 50vh;
  background: linear-gradient(
      rgba(240, 240, 240, 0.144),
      rgba(255, 255, 255, 0.336)
    ),
    url("https://i.postimg.cc/wT3TQS3V/header-image2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.showcase-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.6rem;
}

.main-title {
  text-transform: uppercase;
  margin-top: 1.5em;
}

/* ......//about us//...... */

#about {
  padding: 50px 0;
  background: #f5f5f7;
}

.about-wrapper {
  display: flex;
  flex-wrap: wrap;
}

#about h2 {
  font-size: 2.3rem;
}

#about p {
  font-size: 1.2rem;
  color: #555;
}

#about .small {
  font-size: 1.2rem;
  color: #666;
  font-weight: 600;
}

.about-img {
  flex: 1 1 400px;
  padding: 30px;
  transform: translateX(150%);
  animation: about-img-animation 1s ease-in-out forwards;
}

@keyframes about-img-animation {
  100% {
    transform: translate(0);
  }
}

.about-text {
  flex: 1 1 400px;
  padding: 30px;
  margin: auto;
  transform: translate(-150%);
  animation: about-text-animation 1s ease-in-out forwards;
}

@keyframes about-text-animation {
  100% {
    transform: translate(0);
  }
}

.about-img img {
  display: block;
  height: 400px;
  max-width: 100%;
  margin: auto;
  object-fit: cover;
  object-position: right;
}

/* ..........////Food category///........... */

#food {
  padding: 5rem 0 10rem 0;
}

#food h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 40px;
  text-transform: uppercase;
  color: #555;
}

.food-container {
  display: flex;
  justify-content: space-between;
}

.food-container img {
  display: block;
  width: 100%;
  margin: auto;
  max-height: 300px;
  object-fit: cover;
  object-position: center;
}

.img-container {
  margin: 0 1rem;
  position: relative;
}

.img-content {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 2;
  text-align: center;
  transition: all 0.3s ease-in-out 0.1s;
}

.img-content h3 {
  color: #fff;
  font-size: 2.2rem;
}

.img-content a {
  font-size: 1.2rem;
}

.img-container::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.871);
  opacity: 0;
  z-index: 1;

  transform: scaleY(0);
  transform-origin: 100% 100%;
  transition: all 0.3s ease-in-out;
}

.img-container:hover::after {
  opacity: 1;
  transform: scaleY(1);
}

.img-container:hover .img-content {
  opacity: 1;
  top: 40%;
}
/* .........../Food Menu/............ */

.food-menu-heading {
  text-align: center;
  font-size: 3.4rem;
  font-weight: 400;
  color: #666;
}

.food-menu-container {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0px 30px 0px;
}

.food-menu-container img {
  display: block;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.food-menu-item {
  display: flex;
  flex: 1 1 600px;
  justify-content: space-evenly;
  margin-bottom: 3rem;
}

.food-description {
  margin: auto 1.5rem;
}

.font-title {
  font-size: 1.8rem;
  font-weight: 400;
  color: #444;
}

.food-description p {
  font-size: 1.4rem;
  color: #555;
  font-weight: 500;
}

.food-description .food-price {
  color: #117964;
  font-weight: 700;
}
footer{

    background: #111;
    height: auto;
    padding-top: 40px;
    color: #fff;
}
.footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.footer-content h3{
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
}
.footer-content p{
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
    color: #cacdd2;
    text-align: center;
}
.footer-bottom{
    background: #000;
    width: auto;
    padding: 20px;
    padding-bottom: 40px;
}
.footer-bottom p{
    text-align: center;
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
}
.footer-bottom p a{
  color:#44bae8;
  font-size: 16px;
  text-decoration: none;
}
.footer-bottom span{
    text-transform: uppercase;
    opacity: .4;
    font-weight: 200;
}

</style>