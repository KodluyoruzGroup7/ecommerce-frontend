export const products = [
  {
    id: 1,
    name: 'Martha Knit Top',
    price: 300.0,
    rating: 4.6,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-green-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-black-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-black-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-green-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-green-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-pink-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-pink-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-black-02.jpg',
      ],
      black: [
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-black-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-black-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-black-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-black-05.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-black-06.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-black-07.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-black-08.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-black-09.jpg',
      ],
      green: [
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-green-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-green-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-green-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-green-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-green-05.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-green-06.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-green-07.jpg',
      ],

      pink: [
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-pink-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-pink-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/martha-knit-top/martha-knit-top-pink-03.jpg',
      ],
    },
    size: ['S', 'M'],
    color: ['GREEN', 'PINK', 'BLACK'],
    stockStatus: 'In Stock',
    quantity: 9,
    collections: ['Women', 'Top'],
    description: `A little crisp, a little sunny, warm enough to skip a coat, just cool enough to wrap great cashmere around is this asymmetrical jumper. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        - High-neck style
        - Drop shoulders
        - Flared cuffs
        - Asymmetrical hem`,
  },
  {
    id: 2,
    name: 'Button Up Top Black',
    price: 830.0,
    rating: 4.4,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. ',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/women/button-up-top-black/button-up-top-black-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/women/button-up-top-black/button-up-top-black-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/button-up-top-black/button-up-top-black-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/button-up-top-black/button-up-top-black-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/button-up-top-black/button-up-top-black-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/button-up-top-black/button-up-top-black-05.jpg',
      ],
      black: [
        'https://kd-group7.herokuapp.com/images/collections/women/button-up-top-black/button-up-top-black-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/button-up-top-black/button-up-top-black-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/button-up-top-black/button-up-top-black-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/button-up-top-black/button-up-top-black-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/button-up-top-black/button-up-top-black-05.jpg',
      ],
    },
    size: ['xS', 'S', 'M', 'L'],
    color: ['BLACK'],
    stockStatus: 'In Stock',
    quantity: 5,
    collections: ['Women', 'Top'],
    description: `A little crisp, a little sunny, warm enough to skip a coat, just cool enough to wrap great cashmere around is this asymmetrical jumper. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        - High-neck style
        - Drop shoulders
        - Flared cuffs
        - Asymmetrical hem`,
  },
  {
    id: 3,
    name: 'Innerbloom Puffer Jacket',
    price: 500.0,
    rating: 4.5,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-pink-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-black-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-black-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-pink-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-pink-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-pink-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-blue-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-blue-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-blue-03.jpg',
      ],
      pink: [
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-pink-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-pink-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-pink-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-pink-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-pink-05.jpg',
      ],
      blue: [
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-blue-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-blue-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-blue-03.jpg',
      ],
      black: [
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-black-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-black-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-black-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-black-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/innerbloom-puffer-jacket/innerbloom-puffer-jacket-black-05.jpg',
      ],
    },
    size: ['S', 'M', 'L'],
    color: ['PINK', 'BLUE', 'BLACK'],
    stockStatus: 'In Stock',
    quantity: 11,
    collections: ['Women', 'Top', 'Jacket'],
    description: `SPECIFICATION
        A little crisp, a little sunny, warm enough to skip a coat, just cool enough to wrap great cashmere around is this asymmetrical jumper. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        -High-neck style
        -Drop shoulders
        -Flared cuffs
        -Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 4,
    name: 'Backpack With Contrast Bow',
    price: 70.0,
    rating: 4.3,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-black-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-pink-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-pink-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-grey-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-grey-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-black-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-black-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-black-03.jpg',
      ],
      pink: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-pink-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-pink-01.jpg',
      ],

      grey: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-grey-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-grey-02.jpg',
      ],

      black: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-black-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-black-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/backpack-with-contrast-bow/backpack-with-contrast-bow-black-03.jpg',
      ],
    },
    size: ['S', 'M', 'L'],
    color: ['BLACK', 'GREY', 'PINK'],
    stockStatus: 'In Stock',
    quantity: 6,
    collections: ['Women', 'Accessories', 'Backpack'],
    description: ``,
  },
  {
    id: 5,
    name: 'Toledo Mules Shoes',
    price: 200.0,
    rating: 4.5,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. ',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-black-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-black-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-black-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-camel-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-camel-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-black-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-black-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-camel-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-camel-04.jpg',
      ],
      black: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-black-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-black-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-black-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-black-04.jpg',
      ],

      camel: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-camel-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-camel-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-camel-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/toledo-mules-shoes/toledo-mules-shoes-camel-04.jpg',
      ],
    },
    size: [36, 37, 38, 39, 40, 41, 42, 43],
    color: ['BLACK', 'CAMEL'],
    stockStatus: 'In Stock',
    quantity: 6,
    collections: ['Women', 'Shoes'],
    description: ``,
  },
  {
    id: 6,
    name: 'Sunset Sleep Scarf Top',
    price: 600.0,
    rating: 4.5,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. ',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-bluered-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackpink-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-bluered-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-bluered-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-bluered-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackpink-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackgrey-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackgrey-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackgrey-03.jpg',
      ],
      blueRed: [
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-bluered-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-bluered-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-bluered-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-bluered-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-bluered-05.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-bluered-06.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-bluered-07.jpg',
      ],

      blackGrey: [
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackgrey-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackgrey-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackgrey-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackgrey-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackgrey-05.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackgrey-06.jpg',
      ],
      blackPink: [
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackpink-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/sunset-sleep-scarf-top/sunset-sleep-scarf-top-blackpink-02.jpg',
      ],
    },
    size: ['S', 'M', 'L'],
    color: ['BLUE/RED', 'BLACK/GREY', 'BLACK/PINK'],
    stockStatus: 'Out of Stock',
    quantity: 0,
    collections: ['Women', 'Top'],
    description: `The construction lifts and smooths, giving your rear assets all they need for an amped-up style that screams sex appeal from every angle. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        - High-neck style
        - Drop shoulders
        - Flared cuffs
        - Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 7,
    name: 'High Neck Ribbed Knit',
    price: 600.0,
    rating: 4.8,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-sage-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-pink-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-green-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-olivegreen-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-blue-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-sage-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-sage-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-sage-03.jpg',
      ],
      sage: [
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-sage-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-sage-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-sage-03.jpg',
      ],

      blue: [
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-blue-01.jpg',
      ],

      oliveGreen: [
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-olivegreen-01.jpg',
      ],

      green: [
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-green-01.jpg',
      ],

      pink: [
        'https://kd-group7.herokuapp.com/images/collections/women/high-neck-ribbed-knit/high-neck-ribbed-knit-pink-01.jpg',
      ],
    },
    size: ['XS', 'S', 'M', 'L'],
    color: ['BLUE', 'PINK', 'SAGE', 'OLIVE GREEN', 'GREEN'],
    stockStatus: 'In Stock',
    quantity: 23,
    collections: ['Women', 'Top'],
    description: `A little crisp, a little sunny, warm enough to skip a coat, just cool enough to wrap great cashmere around is this asymmetrical jumper. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        - High-neck style
        - Drop shoulders
        - Flared cuffs
        - Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 8,
    name: 'Trim Straw Floppy Hat',
    price: 80.0,
    rating: 4.7,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/accessories/trim-straw-floppy-hat/trim-straw-floppy-hat-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/trim-straw-floppy-hat/trim-straw-floppy-hat-01.jpg',
      ],
      black: [],
    },
    size: ['S', 'M', 'L'],
    color: ['BLACK'],
    stockStatus: 'In Stock',
    quantity: 4,
    collections: ['Women', 'Accessories', 'Hat'],
    description: ``,
  },
  {
    id: 9,
    name: 'Metal Buckle Skinny Belt',
    price: 100.0,
    rating: 4.2,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. ',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-orange-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-orange-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-orange-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-red-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-red-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-black-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-black-02.jpg',
      ],
      orange: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-orange-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-orange-02.jpg',
      ],

      red: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-red-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-red-02.jpg',
      ],

      black: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-black-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/metal-buckle-skinny-belt/metal-buckle-skinny-belt-black-02.jpg',
      ],
    },
    size: ['XS', 'S', 'M', 'L'],
    color: ['ORANGE', 'RED', 'BLACK'],
    stockStatus: 'In Stock',
    quantity: 13,
    collections: ['Women', 'Accessories', 'Belt'],
    description: ``,
  },
  {
    id: 10,
    name: 'Metal Buckle Skinny Belt',
    price: 100.0,
    rating: 4.2,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/accessories/design-cuff-bracelet/design-cuff-bracelet-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/design-cuff-bracelet/design-cuff-bracelet-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/design-cuff-bracelet/design-cuff-bracelet-02.jpg',
      ],
      silver: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/design-cuff-bracelet/design-cuff-bracelet-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/design-cuff-bracelet/design-cuff-bracelet-02.jpg',
      ],
    },

    size: [],
    color: ['SILVER'],
    stockStatus: 'In Stock',
    quantity: 9,
    collections: ['Women', 'Accessories', 'Jewelery'],
    description: ``,
  },
  {
    id: 11,
    name: 'Footprint Endant Necklace',
    price: 100.0,
    rating: 4.5,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/accessories/footprint-endant-necklace/footprint-endant-necklace-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/footprint-endant-necklace/footprint-endant-necklace-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/footprint-endant-necklace/footprint-endant-necklace-02.jpg',
      ],
      silver: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/footprint-endant-necklace/footprint-endant-necklace-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/footprint-endant-necklace/footprint-endant-necklace-02.jpg',
      ],
    },
    size: [],
    color: ['SILVER'],
    stockStatus: 'In Stock',
    quantity: 14,
    collections: ['Women', 'Accessories'],
    description: ``,
  },
  {
    id: 12,
    name: 'Top Slip On Velcro Sneakers',
    price: 240.0,
    rating: 4.4,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/top-slip-on-velcro-sneakers/top-slip-on-velcro-sneakers-greenolive-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/top-slip-on-velcro-sneakers/top-slip-on-velcro-sneakers-greenolive-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/top-slip-on-velcro-sneakers/top-slip-on-velcro-sneakers-greenolive-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/top-slip-on-velcro-sneakers/top-slip-on-velcro-sneakers-burgundy-01.jpg',
      ],
      oliveGreen: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/top-slip-on-velcro-sneakers/top-slip-on-velcro-sneakers-greenolive-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/top-slip-on-velcro-sneakers/top-slip-on-velcro-sneakers-greenolive-02.jpg',
      ],
      burgundy: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/top-slip-on-velcro-sneakers/top-slip-on-velcro-sneakers-burgundy-01.jpg',
      ],
    },
    size: [37, 38, 39, 40, 41, 42],
    color: ['OLIVE GREEN', 'BURGUNDY'],
    stockStatus: 'In Stock',
    quantity: 17,
    collections: ['Women', 'Shoes'],
    description: ``,
  },
  {
    id: 13,
    name: 'Emotion Mini Dress',
    price: 110.0,
    rating: 4.7,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. ',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-white-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-red-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-purple-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-white-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-emerald-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-white-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-purple-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-emerald-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-emerald-03.jpg',
      ],
      white: [
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-white-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-white-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-white-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-white-04.jpg',
      ],

      emerald: [
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-emerald-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-emerald-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-emerald-03.jpg',
      ],

      purple: [
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-purple-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-purple-02.jpg',
      ],

      red: [
        'https://kd-group7.herokuapp.com/images/collections/women/emotion-mini-dress/emotion-mini-dress-red-01.jpg',
      ],
    },
    size: ['XS', 'S', 'L'],
    color: ['WHITE', 'EMERALD', 'PURPLE', 'RED'],
    stockStatus: 'In Stock',
    quantity: 23,
    collections: ['Women', 'Dress'],
    description: `A little crisp, a little sunny, warm enough to skip a coat, just cool enough to wrap great cashmere around is this asymmetrical jumper. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        - High-neck style
        - Drop shoulders
        - Flared cuffs
        - Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 14,
    name: 'Crop Top Green',
    price: 300.0,
    rating: 4.6,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/women/crop-top-green/crop-top-green-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/women/crop-top-green/crop-top-green-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/crop-top-green/crop-top-green-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/crop-top-green/crop-top-green-03.jpg',
      ],
      green: [
        'https://kd-group7.herokuapp.com/images/collections/women/crop-top-green/crop-top-green-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/crop-top-green/crop-top-green-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/crop-top-green/crop-top-green-03.jpg',
      ],
    },
    size: ['XS', 'S', 'M', 'L'],
    color: ['GREEN'],
    stockStatus: 'In Stock',
    quantity: 12,
    collections: ['Women', 'Top'],
    description: `A little crisp, a little sunny, warm enough to skip a coat, just cool enough to wrap great cashmere around is this asymmetrical jumper. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        - High-neck style
        - Drop shoulders
        - Flared cuffs
        - Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 15,
    name: 'Speak Low Bodysuit',
    price: 300.0,
    rating: 4.6,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. ',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/women/speak-low-bodysuit/speak-low-bodysuit-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/women/speak-low-bodysuit/speak-low-bodysuit-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/speak-low-bodysuit/speak-low-bodysuit-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/speak-low-bodysuit/speak-low-bodysuit-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/speak-low-bodysuit/speak-low-bodysuit-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/speak-low-bodysuit/speak-low-bodysuit-05.jpg',
      ],
      white: [
        'https://kd-group7.herokuapp.com/images/collections/women/speak-low-bodysuit/speak-low-bodysuit-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/speak-low-bodysuit/speak-low-bodysuit-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/speak-low-bodysuit/speak-low-bodysuit-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/speak-low-bodysuit/speak-low-bodysuit-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/speak-low-bodysuit/speak-low-bodysuit-05.jpg',
      ],
    },
    size: ['XS', 'S', 'M'],
    color: ['WHITE'],
    stockStatus: 'In Stock',
    quantity: 6,
    collections: ['Women', 'Bodysuit'],
    description: `The construction lifts and smooths, giving your rear assets all they need for an amped-up style that screams sex appeal from every angle. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        - High-neck style
        - Drop shoulders
        - Flared cuffs
        - Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 16,
    name: 'Night Runner Pants',
    price: 300.0,
    rating: 4.3,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-05.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-06.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-07.jpg',
      ],
      black: [
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-05.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-06.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/night-runner-pants/night-runner-pants-07.jpg',
      ],
    },
    size: ['XS', 'S', 'M', 'L'],
    color: ['BLACK'],
    stockStatus: 'In Stock',
    quantity: 6,
    collections: ['Women', 'Pants'],
    description: `The construction lifts and smooths, giving your rear assets all they need for an amped-up style that screams sex appeal from every angle. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        - High-neck style
        - Drop shoulders
        - Flared cuffs
        - Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 17,
    name: 'Moonlight Bay Knit',
    price: 250.0,
    rating: 4.7,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-blue-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-blue-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-khaki-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-pink-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-blue-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-pink-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-blue-03.jpg',
      ],
      blue: [
        'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-blue-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-blue-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-blue-03.jpg',
      ],

      pink: [
        'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-pink-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-pink-02.jpg',
      ],

      khaki: [
        'https://kd-group7.herokuapp.com/images/collections/women/moonlight-bay-knit/moonlight-bay-knit-khaki-01.jpg',
      ],
    },
    size: ['S', 'M', 'L'],
    color: ['BLUE', 'PINK', 'KHAKI'],
    stockStatus: 'In Stock',
    quantity: 21,
    collections: ['Women', 'Top'],
    description: `A little crisp, a little sunny, warm enough to skip a coat, just cool enough to wrap great cashmere around is this asymmetrical jumper. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        High-neck style
        Drop shoulders
        Flared cuffs
        Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 18,
    name: 'Women Shorts',
    price: 250.0,
    rating: 4.5,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. ',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/women/women-shorts/women-shorts-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/women/women-shorts/women-shorts-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/women-shorts/women-shorts-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/women-shorts/women-shorts-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/women-shorts/women-shorts-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/women-shorts/women-shorts-05.jpg',
      ],
      blue: [
        'https://kd-group7.herokuapp.com/images/collections/women/women-shorts/women-shorts-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/women-shorts/women-shorts-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/women-shorts/women-shorts-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/women-shorts/women-shorts-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/women-shorts/women-shorts-05.jpg',
      ],
    },
    size: ['XS', 'S', 'M', 'L'],
    color: ['BLUE'],
    stockStatus: 'In Stock',
    quantity: 8,
    collections: ['Women', 'Top'],
    description: `A little crisp, a little sunny, warm enough to skip a coat, just cool enough to wrap great cashmere around is this asymmetrical jumper. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        High-neck style
        Drop shoulders
        Flared cuffs
        Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 19,
    name: 'High Waist Jeans',
    price: 300.0,
    rating: 4.5,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/women/high-waist-jeans/high-waist-jeans-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/women/high-waist-jeans/high-waist-jeans-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-waist-jeans/high-waist-jeans-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-waist-jeans/high-waist-jeans-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-waist-jeans/high-waist-jeans-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-waist-jeans/high-waist-jeans-05.jpg',
      ],
      blue: [
        'https://kd-group7.herokuapp.com/images/collections/women/high-waist-jeans/high-waist-jeans-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-waist-jeans/high-waist-jeans-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-waist-jeans/high-waist-jeans-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-waist-jeans/high-waist-jeans-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/women/high-waist-jeans/high-waist-jeans-05.jpg',
      ],
    },
    size: ['XS', 'S', 'M'],
    color: ['BLUE'],
    stockStatus: 'In Stock',
    quantity: 17,
    collections: ['Women', 'Denim'],
    description: `The construction lifts and smooths, giving your rear assets all they need for an amped-up style that screams sex appeal from every angle. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        High-neck style
        Drop shoulders
        Flared cuffs
        Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 20,
    name: 'Two Part Ankle Strap',
    price: 145.0,
    rating: 4.3,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/two-part-ankle-strap/two-part-ankle-strap-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/two-part-ankle-strap/two-part-ankle-strap-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/two-part-ankle-strap/two-part-ankle-strap-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/two-part-ankle-strap/two-part-ankle-strap-03.jpg',
      ],
      black: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/two-part-ankle-strap/two-part-ankle-strap-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/two-part-ankle-strap/two-part-ankle-strap-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/two-part-ankle-strap/two-part-ankle-strap-03.jpg',
      ],
    },
    size: [37, 38, 39, 40, 41],
    color: ['BLACK'],
    stockStatus: 'In Stock',
    quantity: 15,
    collections: ['Women', 'Shoes'],
    description: ``,
  },
  {
    id: 21,
    name: 'Sandals Cross Strappy',
    price: 150.0,
    rating: 4.6,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/sandals-cross-strappy/sandals-cross-strappy-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/sandals-cross-strappy/sandals-cross-strappy-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/sandals-cross-strappy/sandals-cross-strappy-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/sandals-cross-strappy/sandals-cross-strappy-03.jpg',
      ],
      red: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/sandals-cross-strappy/sandals-cross-strappy-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/sandals-cross-strappy/sandals-cross-strappy-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/sandals-cross-strappy/sandals-cross-strappy-03.jpg',
      ],
    },
    size: [36, 37, 38, 39, 40, 41, 42],
    color: ['RED'],
    stockStatus: 'In Stock',
    quantity: 15,
    collections: ['Women', 'Shoes'],
    description: `The sandals is a classic open-toed design,a non-slip rubber sole to confirm your every step safely and easy to move.

        Select each material carefully,we believe that only good material and workmanship could make good shoes,we always insist this
        point.so as to endow them with pure,let the charm bloom.Heel Height: 11cm (4.5 Inches),Sole Width :8CM (3.1 Inches),Shaft Height:7CM (2.7 Inches).Perfect for party,wedding,bridal and evening

        Standard Size.But some buyers reaction shoes are a little big, if you can't determine the size, suggest a small size.`,
  },
  {
    id: 22,
    name: 'Two Part Stiletto Heels',
    price: 170.0,
    rating: 4.5,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. ',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/two-part-stiletto-heels/two-part-stiletto-heels-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/two-part-stiletto-heels/two-part-stiletto-heels-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/two-part-stiletto-heels/two-part-stiletto-heels-02.jpg',
      ],
      beige: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/two-part-stiletto-heels/two-part-stiletto-heels-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/two-part-stiletto-heels/two-part-stiletto-heels-02.jpg',
      ],
    },
    size: [37, 38, 39, 41, 42],
    color: ['Beige'],
    stockStatus: 'In Stock',
    quantity: 9,
    collections: ['Women', 'Shoes'],
    description: ``,
  },
  {
    id: 23,
    name: 'Casual Indigo Shirt',
    price: 300.0,
    rating: 4.6,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
      },
      {
        ratingId: 8,
        rating: 4.3,
        date: '01.02.2021',
        title: 'Good',
        content:
          'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/men/casual-indigo-shirt/casual-indigo-shirt-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/men/casual-indigo-shirt/casual-indigo-shirt-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/casual-indigo-shirt/casual-indigo-shirt-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/casual-indigo-shirt/casual-indigo-shirt-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/casual-indigo-shirt/casual-indigo-shirt-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/casual-indigo-shirt/casual-indigo-shirt-05.jpg',
      ],
      grey: [
        'https://kd-group7.herokuapp.com/images/collections/men/casual-indigo-shirt/casual-indigo-shirt-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/casual-indigo-shirt/casual-indigo-shirt-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/casual-indigo-shirt/casual-indigo-shirt-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/casual-indigo-shirt/casual-indigo-shirt-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/casual-indigo-shirt/casual-indigo-shirt-05.jpg',
      ],
    },
    size: ['S', 'M', 'L'],
    color: ['GREY'],
    stockStatus: 'In Stock',
    quantity: 6,
    collections: ['Men', 'Shorts'],
    description: `The construction lifts and smooths, giving your rear assets all they need for an amped-up style that screams sex appeal from every angle. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        High-neck style
        Drop shoulders
        Flared cuffs
        Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 24,
    name: 'Cargo Pant',
    price: 300.0,
    rating: 4.2,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/men/cargo-pant/cargo-pant-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/men/cargo-pant/cargo-pant-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/cargo-pant/cargo-pant-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/cargo-pant/cargo-pant-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/cargo-pant/cargo-pant-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/cargo-pant/cargo-pant-05.jpg',
      ],
      khaki: [
        'https://kd-group7.herokuapp.com/images/collections/men/cargo-pant/cargo-pant-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/cargo-pant/cargo-pant-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/cargo-pant/cargo-pant-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/cargo-pant/cargo-pant-04.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/cargo-pant/cargo-pant-05.jpg',
      ],
    },
    size: ['S', 'M', 'L', 'XL'],
    color: ['KHAKI'],
    stockStatus: 'In Stock',
    quantity: 7,
    collections: ['Men', 'Pants'],
    description: `The construction lifts and smooths, giving your rear assets all they need for an amped-up style that screams sex appeal from every angle. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        High-neck style
        Drop shoulders
        Flared cuffs
        Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 25,
    name: 'Men Grey Pants',
    price: 500.0,
    rating: 4.6,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/men/men-grey-pants/men-grey-pants-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/men/men-grey-pants/men-grey-pants-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/men-grey-pants/men-grey-pants-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/men-grey-pants/men-grey-pants-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/men-grey-pants/men-grey-pants-04.jpg',
      ],
      grey: [
        'https://kd-group7.herokuapp.com/images/collections/men/men-grey-pants/men-grey-pants-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/men-grey-pants/men-grey-pants-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/men-grey-pants/men-grey-pants-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/men-grey-pants/men-grey-pants-04.jpg',
      ],
    },
    size: ['M', 'L'],
    color: ['GREY'],
    stockStatus: 'In Stock',
    quantity: 7,
    collections: ['Men', 'Pants'],
    description: `The construction lifts and smooths, giving your rear assets all they need for an amped-up style that screams sex appeal from every angle. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        High-neck style
        Drop shoulders
        Flared cuffs
        Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 26,
    name: 'Striped Ringer Tee',
    price: 300.0,
    rating: 4.3,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/men/striped-ringer-tee/striped-ringer-tee-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/men/striped-ringer-tee/striped-ringer-tee-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/striped-ringer-tee/striped-ringer-tee-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/striped-ringer-tee/striped-ringer-tee-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/striped-ringer-tee/striped-ringer-tee-04.jpg',
      ],
      grey: [
        'https://kd-group7.herokuapp.com/images/collections/men/striped-ringer-tee/striped-ringer-tee-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/striped-ringer-tee/striped-ringer-tee-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/striped-ringer-tee/striped-ringer-tee-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/men/striped-ringer-tee/striped-ringer-tee-04.jpg',
      ],
    },
    size: ['S', 'M', 'L'],
    color: ['GREY'],
    stockStatus: 'In Stock',
    quantity: 8,
    collections: ['Men', 'Tees'],
    description: `The construction lifts and smooths, giving your rear assets all they need for an amped-up style that screams sex appeal from every angle. With a chic hue, this one makes for a perfect pick this fall. So get your basics right and you are good to go.

        High-neck style
        Drop shoulders
        Flared cuffs
        Asymmetrical hem

        MODEL MEASUREMENTS
        Bust: 33"
        Waist: 24"
        Hip: 34"
        Wearing Size: 24

        FABRIC COMPOSITION
        This Cute Tank Tops is Lightweight, Relaxed and Comfortable to Wear. Pair it with variety of jeans, skirts, and jeggings for a look that's easy to love all season long.

        Wash Care
        Machine Wash

        NOTE
        It's a loose fit blouse. You could choose a size down it you prefer to get a more fitness blouse. Please take our customers reviews as reference to help you make an informed purchase decision.`,
  },
  {
    id: 27,
    name: 'Lace Up Low Top Sneakers',
    price: 300.0,
    rating: 4.7,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/lace-up-low-top-sneakers/lace-up-low-top-sneakers-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/lace-up-low-top-sneakers/lace-up-low-top-sneakers-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/lace-up-low-top-sneakers/lace-up-low-top-sneakers-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/lace-up-low-top-sneakers/lace-up-low-top-sneakers-03.jpg',
      ],
      white: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/lace-up-low-top-sneakers/lace-up-low-top-sneakers-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/lace-up-low-top-sneakers/lace-up-low-top-sneakers-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/lace-up-low-top-sneakers/lace-up-low-top-sneakers-03.jpg',
      ],
    },
    size: [39, 40, 41, 42],
    color: ['WHITE'],
    stockStatus: 'In Stock',
    quantity: 12,
    collections: ['Men', 'Shoes'],
    description: ``,
  },
  {
    id: 28,
    name: 'Up Low Top Sneakers',
    price: 300.0,
    rating: 4.5,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
      },
      {
        ratingId: 8,
        rating: 4.3,
        date: '01.02.2021',
        title: 'Good',
        content:
          'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/up-low-top-sneakers/up-low-top-sneakers-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/up-low-top-sneakers/up-low-top-sneakers-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/up-low-top-sneakers/up-low-top-sneakers-02.jpg',
      ],
      grey: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/up-low-top-sneakers/up-low-top-sneakers-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/up-low-top-sneakers/up-low-top-sneakers-02.jpg',
      ],
    },
    size: [39, 40, 41, 42, 43, 44],
    color: ['GREY'],
    stockStatus: 'Out of Stock',
    quantity: 0,
    collections: ['Men', 'Shoes'],
    description: ``,
  },
  {
    id: 29,
    name: 'Top Sneakers',
    price: 350.0,
    rating: 4.8,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/top-sneakers/top-sneakers-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/top-sneakers/top-sneakers-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/top-sneakers/top-sneakers-02.jpg',
      ],
      black: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/top-sneakers/top-sneakers-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/top-sneakers/top-sneakers-02.jpg',
      ],
    },
    size: [39, 40, 41, 42, 43],
    color: ['BLACK'],
    stockStatus: 'In Stock',
    quantity: 9,
    collections: ['Men', 'Shoes'],
    description: ``,
  },
  {
    id: 30,
    name: 'Top Slip On Velcro Sneakers',
    price: 250.0,
    rating: 4.3,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/slip-on-velcro-sneakers/slip-on-velcro-sneakers-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/slip-on-velcro-sneakers/slip-on-velcro-sneakers-01.jpg',
      ],
      black: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/slip-on-velcro-sneakers/slip-on-velcro-sneakers-01.jpg',
      ],
    },
    size: [39, 41, 42],
    color: ['BLACK'],
    stockStatus: 'In Stock',
    quantity: 6,
    collections: ['Men', 'Shoes'],
    description: ``,
  },
  {
    id: 31,
    name: 'Block High Heel - Formal',
    price: 150.0,
    rating: 4.3,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
      },
      {
        ratingId: 8,
        rating: 4.3,
        date: '01.02.2021',
        title: 'Good',
        content:
          'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/block-high-heel-formal/block-high-heel-formal-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/block-high-heel-formal/block-high-heel-formal-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/block-high-heel-formal/block-high-heel-formal-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/block-high-heel-formal/block-high-heel-formal-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/block-high-heel-formal/block-high-heel-formal-04.jpg',
      ],
      pink: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/block-high-heel-formal/block-high-heel-formal-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/block-high-heel-formal/block-high-heel-formal-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/block-high-heel-formal/block-high-heel-formal-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/block-high-heel-formal/block-high-heel-formal-04.jpg',
      ],
    },
    size: [38, 39, 40, 41, 42],
    color: ['PINK'],
    stockStatus: 'In Stock',
    quantity: 7,
    collections: ['Women', 'Shoes'],
    description: ``,
  },
  {
    id: 32,
    name: 'Slingbacks Stiletto Heels',
    price: 165.0,
    rating: 4.5,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/slingbacks-stiletto-heels/slingbacks-stiletto-heels-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/slingbacks-stiletto-heels/slingbacks-stiletto-heels-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/slingbacks-stiletto-heels/slingbacks-stiletto-heels-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/slingbacks-stiletto-heels/slingbacks-stiletto-heels-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/slingbacks-stiletto-heels/slingbacks-stiletto-heels-01.jpg',
      ],
      white: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/slingbacks-stiletto-heels/slingbacks-stiletto-heels-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/slingbacks-stiletto-heels/slingbacks-stiletto-heels-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/slingbacks-stiletto-heels/slingbacks-stiletto-heels-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/slingbacks-stiletto-heels/slingbacks-stiletto-heels-01.jpg',
      ],
    },
    size: [38, 39, 40, 41],
    color: ['WHITE'],
    stockStatus: 'In Stock',
    quantity: 11,
    collections: ['Women', 'Shoes'],
    description: ``,
  },
  {
    id: 33,
    name: 'Slingbacks Stiletto Heels',
    price: 195.0,
    rating: 4.3,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/detail-pointed-toe-kitten-heels/detail-pointed-toe-kitten-heels-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/detail-pointed-toe-kitten-heels/detail-pointed-toe-kitten-heels-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/detail-pointed-toe-kitten-heels/detail-pointed-toe-kitten-heels-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/detail-pointed-toe-kitten-heels/detail-pointed-toe-kitten-heels-03.jpg',
      ],
      black: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/detail-pointed-toe-kitten-heels/detail-pointed-toe-kitten-heels-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/detail-pointed-toe-kitten-heels/detail-pointed-toe-kitten-heels-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/detail-pointed-toe-kitten-heels/detail-pointed-toe-kitten-heels-03.jpg',
      ],
    },
    size: [38, 39, 40, 41, 42],
    color: ['BLACK'],
    stockStatus: 'In Stock',
    quantity: 13,
    collections: ['Women', 'Shoes'],
    description: ``,
  },
  {
    id: 34,
    name: 'Pointed Toe Ankle Strap',
    price: 175.0,
    rating: 4.6,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/pointed-toe-ankle-strap/pointed-toe-ankle-strap-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/pointed-toe-ankle-strap/pointed-toe-ankle-strap-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/pointed-toe-ankle-strap/pointed-toe-ankle-strap-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/pointed-toe-ankle-strap/pointed-toe-ankle-strap-03.jpg',
      ],
      black: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/pointed-toe-ankle-strap/pointed-toe-ankle-strap-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/pointed-toe-ankle-strap/pointed-toe-ankle-strap-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/pointed-toe-ankle-strap/pointed-toe-ankle-strap-03.jpg',
      ],
    },
    size: [38, 39, 40, 41],
    color: ['BLACK'],
    stockStatus: 'In Stock',
    quantity: 15,
    collections: ['Women', 'Shoes'],
    description: `KalatyThe sandals is a classic open-toed design,a non-slip rubber sole to confirm your every step safely and easy to move.

        Select each material carefully,we believe that only good material and workmanship could make good shoes,we always insist this
        point.so as to endow them with pure,let the charm bloom.Heel Height: 11cm (4.5 Inches),Sole Width :8CM (3.1 Inches),Shaft Height:7CM (2.7 Inches).Perfect for party,wedding,bridal and evening

        Standard Size.But some buyers reaction shoes are a little big, if you can't determine the size, suggest a small size.`,
  },
  {
    id: 35,
    name: 'Strap Stiletto Heels',
    price: 225.0,
    rating: 4.8,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/strap-stiletto-heels/strap-stiletto-heels-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/strap-stiletto-heels/strap-stiletto-heels-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/strap-stiletto-heels/strap-stiletto-heels-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/strap-stiletto-heels/strap-stiletto-heels-03.jpg',
      ],
      white: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/strap-stiletto-heels/strap-stiletto-heels-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/strap-stiletto-heels/strap-stiletto-heels-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/strap-stiletto-heels/strap-stiletto-heels-03.jpg',
      ],
    },
    size: [37, 38, 39, 40, 41, 42],
    color: ['WHITE'],
    stockStatus: 'In Stock',
    quantity: 14,
    collections: ['Women', 'Shoes'],
    description: ``,
  },
  {
    id: 36,
    name: 'Silver Heeled Sandals',
    price: 175.0,
    rating: 4.5,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/shoes/silver-heeled-sandals/silver-heeled-sandals-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/silver-heeled-sandals/silver-heeled-sandals-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/silver-heeled-sandals/silver-heeled-sandals-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/silver-heeled-sandals/silver-heeled-sandals-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/silver-heeled-sandals/silver-heeled-sandals-04.jpg',
      ],
      silver: [
        'https://kd-group7.herokuapp.com/images/collections/shoes/silver-heeled-sandals/silver-heeled-sandals-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/silver-heeled-sandals/silver-heeled-sandals-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/silver-heeled-sandals/silver-heeled-sandals-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/shoes/silver-heeled-sandals/silver-heeled-sandals-04.jpg',
      ],
    },
    size: [36, 37, 38, 41, 42],
    color: ['SILVER'],
    stockStatus: 'In Stock',
    quantity: 11,
    collections: ['Women', 'Shoes'],
    description: ``,
  },
  {
    id: 37,
    name: 'Silver Bag',
    price: 135.0,
    rating: 4.9,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/accessories/silver-bag/silver-bag-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-bag/silver-bag-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-bag/silver-bag-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-bag/silver-bag-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-bag/silver-bag-04.jpg',
      ],
      silver: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-bag/silver-bag-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-bag/silver-bag-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-bag/silver-bag-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-bag/silver-bag-04.jpg',
      ],
    },
    size: [],
    color: ['SILVER'],
    stockStatus: 'In Stock',
    quantity: 12,
    collections: ['Women', 'Accessories'],
    description: ``,
  },
  {
    id: 38,
    name: 'Silver Tone Earrings',
    price: 75.0,
    rating: 4.2,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/accessories/silver-tone-earrings/silver-tone-earrings-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-tone-earrings/silver-tone-earrings-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-tone-earrings/silver-tone-earrings-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-tone-earrings/silver-tone-earrings-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-tone-earrings/silver-tone-earrings-04.jpg',
      ],
      silver: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-tone-earrings/silver-tone-earrings-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-tone-earrings/silver-tone-earrings-02.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-tone-earrings/silver-tone-earrings-03.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/silver-tone-earrings/silver-tone-earrings-04.jpg',
      ],
    },
    size: [],
    color: ['SILVER'],
    stockStatus: 'In Stock',
    quantity: 15,
    collections: ['Women', 'Accessories'],
    description: ``,
  },
  {
    id: 39,
    name: 'Footprint Pendant Necklace',
    price: 115.0,
    rating: 4.4,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/accessories/footprint-pendant-necklace/footprint-pendant-necklace-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/footprint-pendant-necklace/footprint-pendant-necklace-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/footprint-pendant-necklace/footprint-pendant-necklace-02.jpg',
      ],
      silver: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/footprint-pendant-necklace/footprint-pendant-necklace-01.jpg',
        'https://kd-group7.herokuapp.com/images/collections/accessories/footprint-pendant-necklace/footprint-pendant-necklace-02.jpg',
      ],
    },
    size: [],
    color: ['SILVER'],
    stockStatus: 'In Stock',
    quantity: 12,
    collections: ['Women', 'Accessories'],
    description: ``,
  },
  {
    id: 40,
    name: 'Footprint Pendant Necklace',
    price: 95.0,
    rating: 4.6,
    reviews: [
      {
        ratingId: 1,
        rating: 4.6,
        date: '12.02.2021',
        title: 'Very Good for this price!',
        content:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      },
      {
        ratingId: 2,
        rating: 4.2,
        date: '10.02.2021',
        title: 'Nice',
        content:
          'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
      },
      {
        ratingId: 3,
        rating: 4.4,
        date: '09.02.2021',
        title: 'Good',
        content:
          'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      },
      {
        ratingId: 4,
        rating: 5.0,
        date: '06.02.2021',
        title: 'Amazing, I like it!!!',
        content:
          'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      },
      {
        ratingId: 5,
        rating: 4.3,
        date: '03.02.2021',
        title: 'Good',
        content:
          'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
      },
      {
        ratingId: 6,
        rating: 4.4,
        date: '01.02.2021',
        title: 'Nice',
        content:
          'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.',
      },
      {
        ratingId: 7,
        rating: 4.7,
        date: '01.02.2021',
        title: 'Like it',
        content:
          'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
      },
      {
        ratingId: 8,
        rating: 4.3,
        date: '01.02.2021',
        title: 'Good',
        content:
          'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.',
      },
    ],
    imgMain:
      'https://kd-group7.herokuapp.com/images/collections/accessories/pendant-necklace/pendant-necklace-01.jpg',
    images: {
      showcase: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/pendant-necklace/pendant-necklace-01.jpg',
      ],
      silver: [
        'https://kd-group7.herokuapp.com/images/collections/accessories/pendant-necklace/pendant-necklace-01.jpg',
      ],
    },
    size: [],
    color: ['SILVER'],
    stockStatus: 'In Stock',
    quantity: 8,
    collections: ['Women', 'Accessories'],
    description: ``,
  },
];
