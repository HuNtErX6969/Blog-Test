<template >
  <div class="cardContainer">
    {{ post }}
    <div class="imageContainer">
      <img src="@/assets/Images/CardImages/image1.jpg" alt="image1" />
      <div class="overlay"></div>
      <div class="actionContainer">
        <button>
          <i class="fa fa-edit"></i>
        </button>
        <button>
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </div>
    <div class="titleContainer">
      <h4>{{ title }}</h4>
    </div>
    <div class="contentContainer">
      <p>
        {{ description }}
      </p>
    </div>
    <div class="profileContainer">
      <div class="leftContainer">
        <div class="profileImage">
          <img
            src="@/assets/Images/profileImages/profile1.jpeg"
            alt="profile1"
          />
        </div>
        <div class="profileContent">
          <span>Darinka Kostelnik</span>
          <span class="text-muted">Feb 14</span>
        </div>
      </div>
      <div class="btnContainer">
        <router-link to="/BlogPosts">
          <button class="btn">Read</button>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "MyPosts",
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped>
.cardContainer {
  width: 300px;
  padding: 0.5rem;
  margin-top: 0.5rem;
}
.cardContainer > .imageContainer {
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: -2px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: background 0.5s ease;
}

.cardContainer:hover .overlay {
  display: block;
  background: rgba(0, 0, 0, 0.5);
}

.imageContainer > img {
  width: 280px;
}
.cardContainer > .imageContainer > .actionContainer {
  padding: 5px;
  position: absolute;
  right: 5px;
  top: 0;
  opacity: 0;
  transition: all 0.5s ease;
}
.cardContainer:hover .actionContainer {
  opacity: 1;
  top: 5px;
}
.cardContainer > .imageContainer > .actionContainer > button {
  border: 1px solid #fefefe;
  color: #fefefe;
  outline: none;
  background: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-right: 0.5rem;
  transition: all 0.3s ease-in-out;
}
.cardContainer > .imageContainer > .actionContainer > button > i {
  font-size: 20px;
  margin: auto;
  font-weight: 500;
}
.titleContainer > h4 {
  margin-top: 10px;
  font-size: 28px;
  font-weight: 500;
}
.contentContainer > p {
  color: grey;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.profileContainer {
  display: flex;
  justify-content: space-between;
}
.profileContainer > .leftContainer {
  display: flex;
}
.profileContainer > .leftContainer > .profileImage > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.profileContainer > .leftContainer > .profileContent {
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
}
.btn {
  outline: none;
  padding: 0.5rem;
  border: 1px solid #63b476;
  background: none;
  cursor: pointer;
  color: #63b476;
  transition: all 0.3s ease-in-out;
}
.btn:hover {
  background: #63b476;
  color: #fefefe;
}
</style>