<template>
  <div class="table-list">
      <!--为什么第一行没有空格了-->
      <el-table :data="list">
          <el-table-column label="序号">
              <template slot-scope="scope">
                  <p>123213</p>
              </template>
          </el-table-column>
          <el-table-column label="数据">
              <template slot-scope="scope">
                  <p>{{scope.row.data}}</p>
              </template>
          </el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
  data(){
      return {
          list:[{data:123123}]
      }
  }
}
</script>

