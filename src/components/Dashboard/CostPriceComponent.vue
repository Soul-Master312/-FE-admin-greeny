<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md3 pa-3>
        <v-text-field
            label="Amount"
            v-model="price"
            suffix="$"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 md3 pa-3>
        <v-text-field
            label="Weight"
            v-model="weight"
            suffix="lbs"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 md3 pa-3>
        <v-text-field
            label="Quantity"
            v-model="quantity"
            suffix="pieces"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-card flat>
        <v-card-text class="text-xs-center font-weight-bold font-italic">thuốc và mỹ phẩm tính theo lb, còn lại tính theo sản phẩm</v-card-text>
      </v-card>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md12>
        <v-tabs
            dark
            slider-color="yellow"
            show-arrows
            v-model="active"
        >
          <v-tab
              v-for="(value, index) in categories"
              :key="index"
              ripple
          >
            {{ value }}
          </v-tab>

          <v-tab-item
              :key="0"
          >
            <v-card flat>
              <v-card-text>Phụ thu $3/lb cho lượng thuốc dư tiếp theo</v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item
              :key="1"
          >
            <v-layout row class="mt-1">
              <v-flex xs12 md3>
                <v-select
                    :items="trademark_of_perfume"
                    label="Trademark"
                    v-model="perfume"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-tab-item>

          <v-tab-item
              :key="2"
          >
            <v-card flat>
              <v-card-text>Phụ thu $3/lb cho lượng mỹ phẩm dư tiếp theo</v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item
              :key="3"
          >
            <v-card flat>
              <v-card-text>Free thuế 1-2 cái rẻ tiền nếu thùng hàng khoảng 15-20lb</v-card-text>
            </v-card>
            <v-layout row>
              <v-flex xs12 md3>
                <v-select
                    :items="trademark_of_glasses"
                    label="Trademark"
                    v-model="glasses"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-tab-item>

          <v-tab-item
              :key="4"
          >
            <v-card flat>
              <v-card-text>Free thuế 1 đôi nếu thùng khoảng trên 15 lb</v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item
              :key="5"
          >
            <v-card flat>
              <v-card-text>Đồng hồ thường, hộp nhỏ, không phải đồng hồ Thuỵ Sỹ</v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item
              :key="6"
          >
            <v-card flat>
              <v-card-text>Thu 10% giá trị sản phẩm</v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item
              :key="7"
          >
            <v-layout row>
              <v-flex xs12 md3 pa-2>
                <v-select
                    :items="phone_laptop"
                    label="Product"
                    v-model="product"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-tab-item>

        </v-tabs>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row>
      <v-flex grow pa-1>
        <v-text-field
            v-model="total_price"
            label="Total Price"
            readonly
        ></v-text-field>
      </v-flex>
      <v-flex shrink pa-1>
        <v-btn @click.stop="totalPrice" color="info">Calculate</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'CostPriceComponent',
  data () {
    return {
      total_price: '',
      price: '',
      weight: '',
      quantity: '',
      active: null,
      shipping_price: 2.6,
      trademark_of_perfume: ['Other', 'Chanel'],
      trademark_of_glasses: ['Other', 'Rayban'],
      perfume: 'Other',
      glasses: 'Other',
      product: 'Tablet',
      phone_laptop: ['Tablet', 'Iphone 6 <=', 'Iphone 7', 'Iphone 8, X', 'Iphone XS, XR', 'Laptop', 'Old Macbook-Surface', 'New Macbook-Surface'],
      categories: ['Medicine', 'Perfume', 'Cosmetic', 'Handbag - Glasses', 'Shoe', 'Watch', 'Electronic Apparatus', 'Tablet - Iphone - Laptop'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    totalPrice () {
      let price = Number(this.price)
      let price1 = 0.085 * price
      let price2 = price + price1 + this.shippingPrice()
      this.total_price = 1.2 * price2
    },
    shippingPrice () {
      let ship = this.weight * this.shipping_price
      return ship + this.additionallyLevied()
    },
    additionallyLevied () {
      let price = Number(this.price)
      switch (this.active) {
        case 0:
        case 2:
          return 3 * this.weight
        case 1:
          if (price < 50) {
            return 3 * this.quantity
          } else if (price >= 50 && price < 100) {
            if (this.perfume === 'Chanel') {
              return 7 * this.quantity
            }
            return 5 * this.quantity
          } else if (price >= 100 && price < 300) {
            return 6 * this.quantity
          } else {
            return 0.08 * price * this.quantity
          }
        case 3:
          if (price < 100) {
            return 4 * this.quantity
          } else if (price >= 100 && price < 300) {
            if (this.glasses === 'Rayban') {
              return 7 * this.quantity
            }
            return 5 * this.quantity
          } else {
            return 0.1 * price * this.quantity
          }
        case 4:
          if (price < 100) {
            return 6 * this.quantity
          } else if (price >= 100 && price < 300) {
            return 7 * this.quantity
          } else {
            return 0.1 * price * this.quantity
          }
        case 5:
          if (price < 200) {
            return 6 * this.quantity
          } else {
            return 0.1 * price * this.quantity
          }
        case 6:
          return 0.1 * price * this.quantity
        case 7:
          if (price <= 1000) {
            switch (this.product) {
              case 'Laptop':
              case 'Tablet':
              case 'Iphone 6 <=':
                return 65 * this.quantity
              case 'Iphone 7':
                return 70 * this.quantity
              case 'Iphone 8, X':
                return 80 * this.quantity
              case 'Iphone XS, XR':
                return 100 * this.quantity
              case 'Old Macbook-Surface':
                return 80 * this.quantity
              case 'New Macbook-Surface':
                return 90 * this.quantity
            }
          }
          return 0.1 * price * this.quantity
      }
    }
  }
}
</script>

<style scoped>

</style>
