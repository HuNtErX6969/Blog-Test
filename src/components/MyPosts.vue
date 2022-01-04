<template>
  <div class="cardContainer">
    <div class="imageContainer">
      <img src="@/assets/Images/CardImages/image2.jpg" alt="image1" />
    </div>
    <div class="titleContainer">
      <h4>Timeless lessons from a typography masters</h4>
    </div>
    <div class="contentContainer">
      <p>
        There’s a beauty and complexity to typography. Some people devote their
        entire careers to type. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Ipsum architecto ipsam voluptate consectetur
        perferendis adipisci harum ratione quis perspiciatis. Laudantium?
      </p>
    </div>
    <div class="profileContainer">
      <div class="profileImage">
        <img src="@/assets/Images/profileImages/profile1.jpeg" alt="profile1" />
      </div>
      <div class="profileContent">
        <span>Darinka Kostelnik</span>
        <span class="text-muted">Feb 14</span>
      </div>
      <div class="btnContainer">
        <button>Read</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPosts"
};
</script>

<style scoped>
.cardContainer {
  width: 300px;
  padding: 0.5rem;
  margin-top: 0.5rem;
}
.imageContainer > img {
  width: 280px;
  height: 200px;
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.profileContainer {
  display: flex;
  justify-content: space-between;
}
.profileContainer > .profileImage > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.profileContainer > .profileContent {
  display: flex;
  flex-direction: column;
}
.profileContainer > .btnContainer > button {
  outline: none;
  padding: 0.5rem;
  border: 1px solid #63b476;
  background: none;
  cursor: pointer;
  color: #63b476;
  transition: all 0.3s ease-in-out;
}
.profileContainer > .btnContainer > button:hover {
  background: #63b476;
  color: #fefefe;
}
</style>