<template>
    <div class="container mt-3">
    <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header p-3  bg-primary text-white">
                    <h3 class="card-title mb-0" >Gestion des utilisateurs</h3>
                <div class="card-tools">
                    <button class="btn btn-success" data-toggle="modal" data-target="#addNew">
                        Ajouter un utilisateur<i class="fas fa-user-plus fa-fw"></i>
                    </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <tbody><tr class="bg-primary">
                    <th>ID</th>
                    <th>Photo</th>
                    <th>Nom</th>
                    <th>email</th>
                    <th>role</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>183</td>
                    <td>John Doe</td>
                    <td>11-7-2014</td>
                    <td><span class="tag tag-success">Approved</span></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    <td>
                        <a href="#" alt="Modifier">
                            <i class="fas fa-user-edit"></i>
                        </a>&nbsp;
                        <a href="#" alt="Supprimer">
                            <i class="fas fa-user-minus red"></i>
                        </a>&nbsp;
                        
                    </td>
                  </tr>
                  
                </tbody></table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        </div>
<!-- Modal -->
    <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="addNewLabel">Ajouter un nouvel utilisateur</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>


                    <form @submit.prevent ='createUser' > 
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
                                    <button type="submit" class="btn btn-primary">Ajouter</button>
                                </div>
                    </form>  
          </div>
        </div>
    </div>
<!-- fin Modal -->
    </div>
</template>

<script>
    export default {
        data (){
          return {
            users :{},
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
            createUser () {
              // Submit the form via a POST request
              this.form.post('api/user');
            }

        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>