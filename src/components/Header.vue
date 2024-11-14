<template>
  <div class="header">
    <div class="option-container">
      <div class="date-range">
        <div class="date-picker">
          <label>от</label>
          <input type="date" value="2023-11-02">
        </div>
        <div class="date-picker">
          <label>до</label>
          <input type="date" value="2024-09-06">
        </div>
      </div>
      <div class="filter-container">
<!--        <select name="division" id="division" class="custom-select">-->
<!--          <option value="division-0" selected>Дивизион</option>-->
<!--          <option value="division-1">Дивизион 1</option>-->
<!--          <option value="division-2">Дивизион 2</option>-->
<!--          <option value="division-3">Дивизион 3</option>-->
<!--          <option value="division-4">Дивизион 4</option>-->
<!--        </select>-->
<!--        <select name="territory" id="territory" class="custom-select">-->
<!--          <option value="territory-0" selected>Территория</option>-->
<!--          <option value="territory-1">Территория 1</option>-->
<!--          <option value="territory-2">Территория 2</option>-->
<!--          <option value="territory-3">Территория 3</option>-->
<!--          <option value="territory-4">Территория 4</option>-->
<!--        </select>-->
<!--        <select name="distributor" id="distributor" class="custom-select">-->
<!--          <option value="distributor-0" selected>Дистрибьютор</option>-->
<!--          <option value="distributor-1">Дистрибьютор 1</option>-->
<!--          <option value="distributor-2">Дистрибьютор 2</option>-->
<!--          <option value="distributor-3">Дистрибьютор 3</option>-->
<!--          <option value="distributor-4">Дистрибьютор 4</option>-->
<!--        </select>-->
<!--        <select name="brand" id="brand" class="custom-select">-->
<!--          <option value="brand-0" selected>Бренд</option>-->
<!--          <option value="brand-1">Бренд 1</option>-->
<!--          <option value="brand-2">Бренд 2</option>-->
<!--          <option value="brand-3">Бренд 3</option>-->
<!--          <option value="brand-4">Бренд 4</option>-->
<!--        </select>-->
<!--        <select name="channel" id="channel" class="custom-select">-->
<!--          <option value="channel-0" selected>Канал сбыта</option>-->
<!--          <option value="channel-1">Канал сбыта 1</option>-->
<!--          <option value="channel-2">Канал сбыта 2</option>-->
<!--          <option value="channel-3">Канал сбыта 3</option>-->
<!--          <option value="channel-4">Канал сбыта 4</option>-->
<!--        </select>-->
        <CustomSelect :options="['Дивизион', 'Дивизион 1', 'Дивизион 2', 'Дивизион 3']" :default="'Дивизион'" class="select"></CustomSelect>
        <CustomSelect :options="['Территория', 'Территория 1', 'Территория 2', 'Территория 3']" :default="'Территория'" class="select"></CustomSelect>
        <CustomSelect :options="['Дистрибьютор', 'Дистрибьютор 1', 'Дистрибьютор 2', 'Дистрибьютор 3']" :default="'Дистрибьютор'" class="select" id="distributor"></CustomSelect>
        <CustomSelect :options="['Бренд', 'Бренд 1', 'Бренд 2', 'Бренд 3']" :default="'Бренд'" class="select"></CustomSelect>
        <CustomSelect :options="['Канал сбыта', 'Канал сбыта 1', 'Канал сбыта 2', 'Канал сбыта 3']" :default="'Канал сбыта'" class="select"></CustomSelect>
        <button class="show-button">Показать</button>
      </div>
    </div>
    <nav>
      <div class="nav-element">Календарь</div>
      <div class="nav-element no-border-nav-el">Заявка на обучение</div>
      <div class="nav-element no-border-nav-el">Спец. задача</div>
      <div class="nav-element no-border-nav-el">Список &quot;Мои дела&quot; на день</div>
      <div class="nav-element no-border-nav-el">Маршруты</div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  components  : {CustomSelect}
}
import CustomSelect from "@/components/CustomSelect.vue";
</script>

<style scoped>

</style>