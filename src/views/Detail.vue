<template>
  <div>
    <Loader v-if="loading"/>
    <div v-else-if="record">
      <div class="breadcrumb-wrap">
        <a href="/history" class="breadcrumb">История</a>
        <a class="breadcrumb">
          {{record.typr ==='income'?'Доход':'Расход'}}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card"
            :class="{
              'red':record.type==='outcome',
              'green':record.type==='incomenpm'
            }"
          >
            <div class="card-content white-text">
              <p>Описание: {{record.description}}</p>
              <p>Сумма: {{record.amount | currency("RUB")}}</p>
              <p>Категория:{{record.categoryName}}</p>

              <small>{{record.date | date("datetime")}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="center" v-else>Не найдено</p>
  </div>
</template>
<script>
export default {
  name:'detail',
  data:()=>({
    record:null,
    loading:true
  }),
  async mounted(){
    const id = this.$route.params.id
    const record = await this.$store.dispatch('fetchRecordById',id)
    const category = await this.$store.dispatch('fetchCategoryById',record.categoryId)
    this.record={
      ...record,
      categoryName: category.title
    }
    this.loading = false
  }
}
</script>
