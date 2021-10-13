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
                <div class="form-group pt-2">
                        <button class="btn btn-primary">REGISTRAR</button>

                    </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            producto:{
                    nombreProducto: '',
                    linkimagenProducto: '',
                    descripcionProducto: '',
                    precioProducto: '',
                    informacionVededor: '',
                    observaciones: ''
            }
        }
    },
    methods:{
        addProducto(){
            console.log(this.producto)
        }
    }
}
</script>