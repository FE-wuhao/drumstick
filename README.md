# antd 组件项目构建笔记

1. 项目的色彩体系

   * 系统色板=基础色板+中性色板

     * 基础色板：系统中所需要使用到的一系列颜色，如下图中的基础色板为蓝、绿、金黄、薄雾

       ![pZc5IS7C1uIhSvc4nfbz](C:\Users\64585\Desktop\antd组件轮子\drumstick\writingMaterial\pZc5IS7C1uIhSvc4nfbz.jpg)

       

     * 中性色板：只有黑白灰三色，下图这组颜色就是中性色板

       ![WFxGNwGIVJLYXkGYDsAA](C:\Users\64585\Desktop\antd组件轮子\drumstick\writingMaterial\WFxGNwGIVJLYXkGYDsAA.png)

   - 产品色板=品牌色+功能色板

     * 品牌色：一个品牌的主要颜色，一般是两种颜色，如可口可乐的品牌logo就是红色和白色

     * 功能色板：携带了信息的颜色，如红色表示错误，橙色表示警告，绿色表示成功

       ![jBM0ibVo39dKUn3NSEtb](C:\Users\64585\Desktop\antd组件轮子\drumstick\writingMaterial\jBM0ibVo39dKUn3NSEtb.png)

2. sass中的!default

   用于设定sass变量的默认值。如果用户自己后来也声明了同名sass变量，则采用用户设定的值。

3. rem和em

   * rem：相对于根元素html的fontsize的rem倍率的大小
   * em：相对于当前元素的fontsize的em倍率的大小

4. sass的内置函数lighten和darken

   * lighten：使颜色变亮
     * `background: lighten($baseColor,10%);`
   * darken：使颜色变暗
     * `background: darken($baseColor,10%);`

5. normalize.css的使用 

   normalize做好了浏览器的兼容性，进行了默认元素样式的一致性处理

6. sass的@import

   * sass可以通过@import导入scss或者sass文件
   * 在真实的运行环境中不会多次请求导入的scss/sass文件，在编译阶段就会把它们编译到一个css文件中去
   * 对于不希望被编译的sass/scss文件，在文件名前面加上一个下划线，如**_a.scss**,即可实现sass的partials功能，编译器会跳过该文件的编译。在其他文件中对**_a.scss**进行@import时需要去除前面的下划线，即`@import a.scss`,并且在编译阶段会被一起编译到引入a文件的文件中去