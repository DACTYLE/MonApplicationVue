<template>
  <div id="login-form">
    <form @submit.prevent="handleSubmit">
      <h1>{{ title }}</h1>
      <span v-if="submitbutton">J'ai appuyé sur le bouton</span>
      <p>Remplissez ce formulaire pour vous connecter.</p>
      <hr />
  
      <label for="email"><b>Email</b></label>
      <input
        type="text"
        placeholder="Entrez votre courriel"
        id="email"
        v-model="email"
        required
      />
  
      <label for="psw" class="text-pink-500"><b>Mot de passe</b></label>
      <input
        type="password"
        placeholder="Entrez votre mot de passe"
        id="psw"
        v-model="password"
        required
      />
  
      <p><button type="submit">Se connecter</button></p>
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useSession } from "@/store/session";

export default defineComponent({
  data() {
    return {
      title: "Authentification" as string,
      submitbutton: false as boolean,
      email: "" as string,
      password: "" as string,
      errorMessage: "" as string,
    };
  },
  setup() {
    const session = useSession();
    const router = useRouter();
    return { session, router };
  },
  methods: {
    handleSubmit() {
      this.submitbutton = true;

      if (this.password !== "1234") {
        this.errorMessage = "Mot de passe incorrect.";
      } else {
        this.errorMessage = "";
        this.session.login({user: { email: this.email }})
        this.router.push({ name: 'TaskList' });
      }
    }
  },
  mounted() {
    console.log(`Le composant a été inséré dans le DOM,
        this.$el pointe vers l'élément correspondant.`);
    this.email=this.session.user?this.session.user.email:"";
    this.$el.querySelector('input')?.focus();
  }
});
</script>

