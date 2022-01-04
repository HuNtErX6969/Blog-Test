<template>
  <div class="container section-margin">
    <div class="imageContainer">
      <img src="../assets/Images/CardImages/image2.jpg" alt />
    </div>

    <div class="contentContainer">
      <div class="titleContainer">
        <h3>Timeless lessons from a typography masters. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, veniam!</h3>
      </div>
      <div class="authorContainer">
        <img src="@/assets/Images/profileImages/profile2.jpg" alt="profile" />
        <div class="profileInfo">
          <span class="authorName">John Doe</span>
          <span class="published text-muted">Published on September 9, 2020</span>
        </div>
      </div>
      <div class="content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, amet cumque quis,
          saepe suscipit dignissimos laboriosam esse molestias a vitae fuga nemo atque.
          Eaque aperiam amet aut quasi commodi. Dicta placeat consectetur culpa harum unde quas
          magni animi voluptatum! Ratione, animi incidunt aut assumenda vel voluptatem ipsam quis
          suscipit quas aliquam quam distinctio nesciunt rerum eveniet veniam impedit doloribus?
          Neque ex recusandae ipsa unde temporibus fugiat ipsum accusamus quo distinctio necessitatibus
          reprehenderit possimus ea, dolore libero consequatur animi obcaecati at iusto mollitia earum
          optio nostrum illum illo dicta. Pariatur ducimus debitis nam ipsam ipsa, nulla eius
          dolorem provident enim. Quibusdam at culpa maiores est. Tenetur consequuntur, natus aut,
          quia odit magni deserunt atque corrupti cum sit earum eos. Facere est officiis sed deserunt,
          eum, illum impedit deleniti iure modi totam a suscipit reiciendis ex, fuga et dolorem ducimus
          nulla dolores aspernatur rerum temporibus nesciunt aperiam quaerat quas. Provident tempora
          velit est repellat molestiae excepturi tenetur praesentium fugiat vitae, totam odit
          sed perferendis neque libero rem facilis molestias ipsum explicabo minima vel.
          Dolor pariatur molestiae molestias eligendi, cupiditate porro quas magni atque assumenda
          distinctio tempore ut soluta culpa vel aliquid quasi error harum eius qui voluptate rerum
          dignissimos? Sit, deleniti odio autem, officiis natus iure, nisi sed quo quidem id voluptatibus!
          Odio doloremque eos earum aperiam assumenda nostrum tenetur, cumque repellat distinctio, rerum
          dignissimos beatae dolor! Vero nesciunt deleniti minus corporis, dolor maxime fuga quae ea
          voluptates qui quaerat consequatur officiis in laudantium excepturi similique? Maiores
          repellat corrupti et totam placeat quas rem quae quo, non optio numquam consectetur,
          praesentium distinctio voluptatibus odit ducimus cum nemo, repellendus fugiat! Necessitatibus,
          aliquam. Non aliquam quos autem sequi optio dolorum quam aspernatur quo libero consequuntur
          aperiam mollitia, doloremque vero accusantium eos esse ratione rerum quisquam pariatur neque
          quidem. Soluta totam, quod impedit deserunt voluptatum commodi repellendus velit amet atque
          nesciunt fuga consequuntur recusandae sit quas assumenda facilis! Incidunt sed voluptatum,
          earum, enim error tempora blanditiis officia nobis dolorem iusto dignissimos cupiditate tempore
          architecto, placeat iste est dolor in eos quos? Consectetur incidunt dignissimos vitae
          possimus itaque reiciendis aspernatur vero esse, eveniet debitis ullam! Veritatis beatae
          libero rem odit dolore ducimus, incidunt veniam exercitationem ipsa, totam aut molestiae
          fuga eius vero, debitis dolor tenetur quam ab excepturi distinctio. Voluptas architecto
          amet totam omnis et quaerat, nihil repellendus asperiores odio ea voluptate cupiditate f
          ugit sed officia facere, minus harum facilis tempore, hic debitis. Eveniet, v
          oluptas numquam?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPosts"
};
</script>

<style scoped>
.section-margin {
  margin-top: 2%;
}
.imageContainer {
  display: flex;
  justify-content: center;
}
.imageContainer > img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.contentContainer {
  padding: 40px 60px;
}
.contentContainer > .titleContainer {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.contentContainer > .authorContainer {
  display: flex;
}
.contentContainer > .authorContainer > img {
  width: 40px;
  object-fit: cover;
  height: 40px;
  border-radius: 50%;
}
.contentContainer > .authorContainer > .profileInfo {
  margin-left: 1rem;
  display: flex;
  align-items: center;
}
.contentContainer > .authorContainer > .profileInfo > .authorName {
  font-weight: 600;
}
.contentContainer > .authorContainer > .profileInfo > .published {
  margin-left: 10px;
}
.contentContainer > .titleContainer > h3 {
  font-size: 40px;
}
.contentContainer > .content > p {
  margin-top: 20px;
}
@media screen and (max-width: 550px) {
  .imageContainer > img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
  .contentContainer {
    padding: 1rem;
  }
  .contentContainer > .titleContainer > h3 {
    font-size: 28px;
  }
  .contentContainer > .authorContainer > .profileInfo {
    margin-left: 1rem;
    flex-direction: column;
    display: block;
  }
}
</style>