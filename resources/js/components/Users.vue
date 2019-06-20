<template>
    <div class="container mt-3">
    <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header p-3  bg-primary text-white">
                    <h3 class="card-title mb-0" >Gestion des utilisateurs</h3>
                <div class="card-tools">
                    <button class="btn btn-success" data-toggle="modal" data-target="#addNewUser">
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
                    <th>Date de création</th>
                    <th>Action</th>
                  </tr>
                  <tr v-for = "user in users" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.photo}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.created_at | myDate}}</td>
                    <td>{{user.role | capitalize}}</td>
                    <td>
                        <a href="#" alt="Modifier">
                            <i class="fas fa-user-edit"></i>
                        </a>&nbsp;
                        <a href="#" @click="deleteUser (user.id)" alt="Supprimer">
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
<!-- UserModelComponent -->
    <div id="model">
        <insmodaluser @AfterUserEmit></insmodaluser>
    </div>  
<!-- fin UserModelComponet -->
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
            loadUsers () {
                axios.get("api/user").then(({ data }) => (this.users = data.data));
            },

            deleteUser(id){
                swal.fire({
                    title: 'Voulez vous supprimer?',
                    text: "Attention impossible de revenire en arriere",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Annuler',
                    confirmButtonText: 'Supprimer'
                })
                .then((result) => {
                    // Send request to the server
                    if (result.value) {
                        this.form.delete('api/user/'+id).then(()=>{
                            swal.fire(
                                'Suppetion reussite!',
                                "l'utilisateur a bien été supprimer",
                                'success'
                            )
                            Fire.$emit('AfterUserEmit');
                        })
                        .catch(()=> {
                            swal.fire("Erreur de suppression!", "Veuillez consulter votre administrateur", "warning");
                        });
                    }
                })
            },
                
        },

        created() {
            this.loadUsers();
            //setInterval(()=>this.loadUsers(),3000);
            //console.log(this.users);
            Fire.$on('AfterUserEmit',()=>{
                this.loadUsers();
            });
        },
        
    }
</script>