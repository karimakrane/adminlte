<template>
<!-- Modal -->
    <div class="modal fade" id="addNewUser" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          	<div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addNewLabel">Ajouter un nouvel utilisateur</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                        <div class="form-group">
                              <label>Nom</label>
                              <input v-model="form.name" type="text" name="name" placeholder="Votre nom" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                              <has-error :form="form" field="name"></has-error>
                        </div>
                        <div class="form-group">
                              <label>Email</label>
                              <input v-model="form.email" type="email" name="email" placeholder="Email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                              <has-error :form="form" field="email"></has-error>
                        </div>
                        <div class="form-group">
                              <label>Rôle</label>
                              <select v-model="form.role" id="role"  name="role" class="form-control" :class="{ 'is-invalid': form.errors.has('role') }">
                                <option value="">Selectionner un rôle</option>
                                <option value="Admin">Admin</option>
                                <option value="Standard">Standard</option>
                              </select>
                              <has-error :form="form" field="role"></has-error>
                        </div>
                        <div class="form-group">
                              <label>Password</label>
                              <input v-model="form.password" type="password" name="password" placeholder="Password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                              <has-error :form="form" field="password"></has-error>
                        </div>
                        <div class="form-group">
                              <label>Photo</label>
                              <input v-model="form.photo" type="text" name="photo" placeholder="Choisir votre photo" class="form-control" :class="{ 'is-invalid': form.errors.has('photo') }">
                              <has-error :form="form" field="photo"></has-error>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Annuler</button>
                        <button type="button" @click="createUser" class="btn btn-primary">Ajouter</button>
                    </div>
                
          	</div>
        </div>
    </div>	
<!-- Fin Modal -->

</template>
<script type="text/javascript">
	export default {
        data (){
          return {
            // Create a new form instance
            form: new Form({
              name: '',
              email: '',
              role:'',
              password: '',
              photo:'', 
            })
          }
        },
        methods:{
        	createUser (){
        		// Submit the form via a POST request
        		this.$Progress.start();
        		
        		this.form.post('api/user')
        			.then(()=>{
        				Fire.$emit('AfterUserEmit');
        				$('#addNewUser').modal('hide');
        				Toast.fire({
                  type: 'success',
                  title: 'Utilisteur ajouter'
		            });
		            this.$Progress.finish();
              })
        			.catch(()=>{
        			 this.$Progress.fail();
        			});
        	},
        },


        mounted() {
            console.log('Component mounted.')
        }
    }


</script>