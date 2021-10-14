<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">Productos Ancestra WEB</a>
        </nav>
        <div class="container pt-5">
            <form @submit.prevent="addProducto">
                <label>Nombre</label>
                <div class="form-group">
                        <input type="text" v-model="producto.nombreProducto" placeholder="">
                    </div>
                <label>Link Imagen</label>
                <div class="form-group">
                    <input type="text" v-model="producto.linkimagenProducto" placeholder="">
                    </div>
                <label>Descripción</label>
                <div class="form-group">
                        <input type="text" v-model="producto.descripcionProducto" placeholder="">
                    </div>
                <label>Precio</label>
                <div class="form-group">
                        <input type="text" v-model="producto.precioProducto" placeholder="">
                    </div>
                <label>Vendedor</label>
                <div class="form-group">
                        <input type="text" v-model="producto.informacionVededor" placeholder="">
                    </div>
                <label>Observaciones</label>
                <div class="form-group">
                        <input type="text" v-model="producto.observaciones" placeholder="">
                    </div>
                <template v-if ="edit===false">
                    <div class="form-group pt-2">
                        <button class="btn btn-primary">Registrar</button>
                    </div>
                </template>
                <template v-else>
                    <div class="form-group pt-2">
                        <button class="btn btn-primary">Actualizar</button>
                    </div>
                </template>
            </form>
        </div>
        <div class="col-md-6 pt-3">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Vendedor</th>
                        <th>Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="producto of productos">
                        <td>{{producto.nombreProducto}}</td>
                        <td>{{producto.linkimagenProducto}}</td>
                        <td>{{producto.descripcionProducto}}</td>
                        <td>{{producto.precioProducto}}</td>
                        <td>{{producto.informacionVededor}}</td>
                        <td>{{producto.observaciones}}</td>
                        <td>
                            <button @click="eliminarProducto(producto._id)" class="btm btn-danger">
                                Eliminar
                            </button>
                        </td>
                        <td>
                            <button @click="actualizarProducto(producto._id)" class="btm btn-secondary">
                                Actualizar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
class Producto{
    constructor(nombreProducto, linkimagenProducto, descripcionProducto, precioProducto, informacionVededor, observaciones){
        this.nombreProducto = nombreProducto;
        this.linkimagenProducto = linkimagenProducto;
        this.descripcionProducto = descripcionProducto;
        this.precioProducto = precioProducto;
        this.informacionVededor = informacionVededor;
        this.observaciones = observaciones;
    }
}

export default {
    data(){
        return{
            producto: new Producto(),
            productos: [],
            edit: false,
            id_actulizar: ''
        }
    },
    created(){
        this.getProductos();
    },
    methods:{
        addProducto(){
            if(this.edit===false){
                fetch('/api/productos',{
                method: 'POST', 
                body: JSON.stringify(this.producto),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                this.getProductos();
            })
        } else{
            fetch('/api/productos/'+this.id_actulizar,{
                method: 'PUT', 
                body: JSON.stringify(this.producto),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }  
            })
            .then(res => res.json())
            .then(data => {
                this.getProductos();
                this.edit=false;
            });
        }
            this.producto = new Producto();
        },
        getProductos(){
            fetch('/api/productos')
            .then(res => res.json())
            .then(data => {
                this.productos = data;
            });
        },
        eliminarProducto(id){
            fetch('/api/productos/'+id,{
              method: 'DELETE', 
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }  
            })
            .then(res => res.json())
            .then(data => {
                this.getProductos();
            });
        },
        actualizarProducto(id){
            fetch('/api/productos/'+id)
            .then(res => res.json())
            .then(data => {
                this.producto = new Producto(data.nombreProducto, data.linkimagenProducto, data.descripcionProducto, data.precioProducto, data.informacionVededor, data.observaciones);
                this.id_actulizar=data._id;
                this.edit = true;
            });
        }

    }
}
</script>