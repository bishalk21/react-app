export const MENU_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "357476",
              name: "Dilli 6 Biryani",
              city: "Delhi",
              slugs: {
                restaurant: "dilli-6-biryani-rohini-rohini",
                city: "delhi",
              },
              uniqueId: "6e13897c-cb04-4924-8e29-5b34a40136f0",
              cloudinaryImageId: "axtvj57eadjq2zwdopz3",
              locality: "Sec 7",
              areaName: "Rohini",
              costForTwo: "25000",
              costForTwoMessage: "₹250 for two",
              cuisines: ["Indian", "Biryani"],
              avgRating: 3.6,
              feeDetails: {
                restaurantId: "357476",
                fees: [
                  {
                    name: "distance",
                    fee: 3800,
                  },
                  {
                    name: "time",
                  },
                  {
                    name: "special",
                  },
                ],
                totalFee: 3800,
                title: "Delivery Charge",
                amount: "3800",
              },
              parentId: "72797",
              avgRatingString: "3.6",
              totalRatingsString: "100+ ratings",
              sla: {
                restaurantId: "357476",
                deliveryTime: 22,
                minDeliveryTime: 22,
                maxDeliveryTime: 22,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                stressFactor: 0.800407,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 218,
                slaString: "22 MINS",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-07-22 23:59:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "40% off",
                shortDescriptionList: [
                  {
                    meta: "40% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "25% off | Use PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "40% off up to ₹80 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "25% off | Use code PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "dilli-6-biryani-rohini-rohini",
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "House no 230 2nd floor BLK-G PKT-21 Sec 7 Rohini city Delhi ,  North West , Delhi-110085",
                },
                {
                  title: "Cuisines",
                  message: "Indian,Biryani",
                },
              ],
              totalRatings: 100,
              aggregatedDiscountInfoV2: {
                header: "40% off",
                shortDescriptionList: [
                  {
                    meta: "40% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "25% off | Use PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "40% off up to ₹80 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "25% off | Use code PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  minValue: 420,
                  maxValue: 600,
                  priority: 2,
                  couponCode: "PARTY",
                  discountInfo: {
                    discountType: "Percentage",
                    value: 25,
                  },
                  lockedMessage:
                    "Add items worth ₹<amount> to unlock flat 25% off | Code PARTY",
                  unlockedMessage:
                    "PARTY Coupon Unlocked! Use it to save flat 25% off",
                  logoCtx: {},
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/357476",
              },
              expectationNotifiers: [
                {
                  icon: {},
                  popup: {
                    cta: {},
                  },
                  type: "DISTANCE_FEE_NON_FOOD_LM",
                  halfCardPopup: {
                    halfCardPopupHeader: {},
                  },
                },
              ],
              ratingSlab: "RATING_SLAB_4",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              areaPostalCode: "0",
              latLong: "28.710026,77.116566",
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "40% OFF UPTO ₹80",
                      offerTagColor: "#E46D47",
                      offerIds: ["2c3d9514-4a64-453d-b1bf-f67154cf2c2d"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE TRYNEW",
                      description: "ABOVE ₹159",
                      offerType: "offers",
                      restId: "357476",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT 25% OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["e22c8ca8-1b8b-4e45-82a7-f01e80f9ae3a"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE PARTY",
                      description: "ABOVE ₹600",
                      offerType: "offers",
                      restId: "357476",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "15% OFF UPTO ₹300",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/15fb1cfe885005447dc8375e7970600f",
                      offerIds: ["ab6ca12d-e322-409c-8396-4b287bdeaf02"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE CITIFOODIE",
                      description: "ABOVE ₹1200",
                      offerType: "offers",
                      restId: "357476",
                      offerLogo:
                        "rng/md/ads/production/15fb1cfe885005447dc8375e7970600f",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "15% OFF UPTO ₹125",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/1acdb97aadcb61b323307845bda86535",
                      offerIds: ["f35bfc4a-7dd4-4f99-b16a-f1cf142a0849"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FEDERALCC125",
                      description: "ABOVE ₹399",
                      offerType: "offers",
                      restId: "357476",
                      offerLogo:
                        "rng/md/ads/production/1acdb97aadcb61b323307845bda86535",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹100 OFF",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/3a937ddacd3adb70c4543c4895213123",
                      offerIds: ["bdebd456-8170-4c12-9982-83192ea37f8e"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE AUCC100",
                      description: "ABOVE ₹399",
                      offerType: "offers",
                      restId: "357476",
                      offerLogo:
                        "rng/md/ads/production/3a937ddacd3adb70c4543c4895213123",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {},
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Biryani",
                      categories: [
                        {
                          title: "Veg Biryani",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "66513693",
                                  name: "Veg Biryani",
                                  category: "Biryani",
                                  imageId: "xvayqryxdjdkw0c3tovd",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "9425496",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 100,
                                            default: 1,
                                            id: "54336622",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 180,
                                            id: "31161988",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 340,
                                            id: "31161989",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "9425496",
                                            variationId: "54336622",
                                          },
                                        ],
                                        price: 10000,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "9425496",
                                            variationId: "31161988",
                                          },
                                        ],
                                        price: 18000,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "9425496",
                                            variationId: "31161989",
                                          },
                                        ],
                                        price: 34000,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  defaultPrice: 10000,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.7",
                                      ratingCount: "23 ratings",
                                      ratingCountV2: "23",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75245563",
                                  name: "Chaap Biryani",
                                  category: "Biryani",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11350759",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 110,
                                            default: 1,
                                            id: "54336620",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 199,
                                            id: "37335520",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 360,
                                            id: "37335521",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11350759",
                                            variationId: "54336620",
                                          },
                                        ],
                                        price: 11000,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350759",
                                            variationId: "37335520",
                                          },
                                        ],
                                        price: 19900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350759",
                                            variationId: "37335521",
                                          },
                                        ],
                                        price: 36000,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  defaultPrice: 11000,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Egg Biryani",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440485",
                                  name: "Egg Biryani",
                                  category: "Biryani",
                                  imageId: "ajsac97lutyac2oe6o1q",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "16317576",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 110,
                                            default: 1,
                                            id: "54336625",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 199,
                                            id: "54336623",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 360,
                                            id: "54336624",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "16317576",
                                            variationId: "54336625",
                                          },
                                        ],
                                        price: 11000,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "16317576",
                                            variationId: "54336623",
                                          },
                                        ],
                                        price: 19900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "16317576",
                                            variationId: "54336624",
                                          },
                                        ],
                                        price: 36000,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 11000,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.1",
                                      ratingCount: "11 ratings",
                                      ratingCountV2: "11",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Non Veg Biryani",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75245561",
                                  name: "Chicken Seekh Biryani",
                                  category: "Biryani",
                                  imageId: "ibxw0s6iimljvcjcfuds",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11350757",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 115,
                                            default: 1,
                                            id: "54336627",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 229,
                                            id: "37335514",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 429,
                                            id: "37335515",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11350757",
                                            variationId: "54336627",
                                          },
                                        ],
                                        price: 11500,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350757",
                                            variationId: "37335514",
                                          },
                                        ],
                                        price: 22900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350757",
                                            variationId: "37335515",
                                          },
                                        ],
                                        price: 42900,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 11500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.5",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75245562",
                                  name: "Mutton Seekh Biryani",
                                  category: "Biryani",
                                  imageId: "ukwpwxcmckudjpy5qvek",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11350758",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 115,
                                            default: 1,
                                            id: "54336629",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 229,
                                            id: "37335517",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 429,
                                            id: "37335518",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11350758",
                                            variationId: "54336629",
                                          },
                                        ],
                                        price: 11500,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350758",
                                            variationId: "37335517",
                                          },
                                        ],
                                        price: 22900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350758",
                                            variationId: "37335518",
                                          },
                                        ],
                                        price: 42900,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 11500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.5",
                                      ratingCount: "20 ratings",
                                      ratingCountV2: "20",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75245565",
                                  name: "Chicken Dum Biryani",
                                  category: "Biryani",
                                  imageId: "olvxrk875f2zkbqpehks",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11350761",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 115,
                                            default: 1,
                                            id: "54336626",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 229,
                                            id: "37335526",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 429,
                                            id: "37335527",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11350761",
                                            variationId: "54336626",
                                          },
                                        ],
                                        price: 11500,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350761",
                                            variationId: "37335526",
                                          },
                                        ],
                                        price: 22900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350761",
                                            variationId: "37335527",
                                          },
                                        ],
                                        price: 42900,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 11500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "88 ratings",
                                      ratingCountV2: "88",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75245568",
                                  name: "Chicken Tikka Biryani",
                                  category: "Biryani",
                                  imageId: "akfymzaq5a0eovjisw8r",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11350763",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 115,
                                            default: 1,
                                            id: "54336628",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 229,
                                            id: "37335532",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 429,
                                            id: "37335533",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11350763",
                                            variationId: "54336628",
                                          },
                                        ],
                                        price: 11500,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350763",
                                            variationId: "37335532",
                                          },
                                        ],
                                        price: 22900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350763",
                                            variationId: "37335533",
                                          },
                                        ],
                                        price: 42900,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 11500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.4",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Drinks Combos",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "94440474",
                              name: "Chaap Biryani With Cold Drinks",
                              category: "Drinks Combos",
                              description:
                                "Chaap Biryani + Cold Drinks (250 ml)",
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "94440475",
                              name: "Chicken Biryani With Cold Drinks",
                              category: "Drinks Combos",
                              description:
                                "Chicken Biryani + Cold Drinks (250 ml)",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "94440476",
                              name: "Paneer Biryani With Cold Drinks",
                              category: "Drinks Combos",
                              description:
                                "Paneer Biryani + Cold Drinks (250 ml)",
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "94440477",
                              name: "Veg Biryani With Cold Drinks",
                              category: "Drinks Combos",
                              description: "Veg Biryani + Cold Drinks (250 ml)",
                              inStock: 1,
                              isVeg: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Snacks",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75245603",
                              name: "Chicken Seekh Kebab",
                              category: "Snacks",
                              imageId: "dd4hroojjl29pqfc7lan",
                              inStock: 1,
                              price: 26000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75245604",
                              name: "Mutton Seekh Kebab",
                              category: "Snacks",
                              imageId: "hpewd1e06rwuvacixxvv",
                              inStock: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Family Pack",
                      categories: [
                        {
                          title: "Veg Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440489",
                                  name: "Veg Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 159900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440490",
                                  name: "Veg Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 59900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440491",
                                  name: "Veg Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 99900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440492",
                                  name: "Veg Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 139900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Egg Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440493",
                                  name: "Egg Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 149900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440494",
                                  name: "Egg Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 64900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440495",
                                  name: "Egg Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 99900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440496",
                                  name: "Egg Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 129900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Paneer Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440497",
                                  name: "Paneer Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 149900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440498",
                                  name: "Paneer Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 64900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440499",
                                  name: "Paneer Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 94900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440500",
                                  name: "Paneer Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 129900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Chaap Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440501",
                                  name: "Chaap Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 149900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440502",
                                  name: "Chaap Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 64900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440503",
                                  name: "Chaap Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 94900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440504",
                                  name: "Chaap Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 129900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Chicken Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440505",
                                  name: "Chicken Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 179900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440506",
                                  name: "Chicken Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 69900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440507",
                                  name: "Chicken Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 109900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440508",
                                  name: "Chicken Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 149900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Chicken Seekh Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440509",
                                  name: "Chicken Seekh Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 179900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440510",
                                  name: "Chicken Seekh Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 69900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440511",
                                  name: "Chicken Seekh Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 109900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440512",
                                  name: "Chicken Seekh Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 149900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Mutton Seekh Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440513",
                                  name: "Mutton Seekh Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 179900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440514",
                                  name: "Mutton Seekh Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 69900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440515",
                                  name: "Mutton Seekh Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 109900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440516",
                                  name: "Mutton Seekh Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 149900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Shakes",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75245605",
                              name: "Mango Shake",
                              category: "Shakes",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75245606",
                              name: "Pineapple Shake",
                              category: "Shakes",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75245607",
                              name: "Strawberry Shake",
                              category: "Shakes",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75245608",
                              name: "Butterscotch Shake",
                              category: "Shakes",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "94440484",
                              name: "Cold Coffee",
                              category: "Shakes",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["Applied for license"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Dilli 6 Biryani",
                      area: "Rohini",
                      completeAddress:
                        "House no 230 2nd floor BLK-G PKT-21 Sec 7 Rohini city Delhi ,  North West , Delhi-110085",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "4a0c9345-2cbb-46ca-8b99-96a8cc0f3e6b",
  sid: "8bhee4cc-94dc-4c47-8e3f-ba61c85e820e",
  deviceId: "1d786d1f-0858-d250-9497-f5dc09b3ced8",
  csrfToken: "G75TnYIbwSWt-P_wOpSQHx0zXWwvpfyWv1z3hyN8",
};

export const RESTAURANT_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "357476",
              name: "Dilli 6 Biryani",
              city: "Delhi",
              slugs: {
                restaurant: "dilli-6-biryani-rohini-rohini",
                city: "delhi",
              },
              uniqueId: "6e13897c-cb04-4924-8e29-5b34a40136f0",
              cloudinaryImageId: "axtvj57eadjq2zwdopz3",
              locality: "Sec 7",
              areaName: "Rohini",
              costForTwo: "25000",
              costForTwoMessage: "₹250 for two",
              cuisines: ["Indian", "Biryani"],
              avgRating: 3.6,
              feeDetails: {
                restaurantId: "357476",
                fees: [
                  {
                    name: "time",
                  },
                  {
                    name: "distance",
                    fee: 3800,
                  },
                  {
                    name: "special",
                  },
                ],
                totalFee: 3800,
                title: "Delivery Charge",
                amount: "3800",
              },
              parentId: "72797",
              avgRatingString: "3.6",
              totalRatingsString: "100+ ratings",
              sla: {
                restaurantId: "357476",
                deliveryTime: 21,
                minDeliveryTime: 21,
                maxDeliveryTime: 21,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                stressFactor: 0.79423714,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 218,
                slaString: "21 MINS",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-07-22 23:59:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "40% off",
                shortDescriptionList: [
                  {
                    meta: "40% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "25% off | Use PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "40% off up to ₹80 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "25% off | Use code PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "dilli-6-biryani-rohini-rohini",
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "House no 230 2nd floor BLK-G PKT-21 Sec 7 Rohini city Delhi ,  North West , Delhi-110085",
                },
                {
                  title: "Cuisines",
                  message: "Indian,Biryani",
                },
              ],
              totalRatings: 100,
              aggregatedDiscountInfoV2: {
                header: "40% off",
                shortDescriptionList: [
                  {
                    meta: "40% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "25% off | Use PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "40% off up to ₹80 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "25% off | Use code PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  minValue: 420,
                  maxValue: 600,
                  priority: 2,
                  couponCode: "PARTY",
                  discountInfo: {
                    discountType: "Percentage",
                    value: 25,
                  },
                  lockedMessage:
                    "Add items worth ₹<amount> to unlock flat 25% off | Code PARTY",
                  unlockedMessage:
                    "PARTY Coupon Unlocked! Use it to save flat 25% off",
                  logoCtx: {},
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/357476",
              },
              expectationNotifiers: [
                {
                  icon: {},
                  popup: {
                    cta: {},
                  },
                  type: "DISTANCE_FEE_NON_FOOD_LM",
                  halfCardPopup: {
                    halfCardPopupHeader: {},
                  },
                },
              ],
              ratingSlab: "RATING_SLAB_4",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              areaPostalCode: "0",
              latLong: "28.710026,77.116566",
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "40% OFF UPTO ₹80",
                      offerTagColor: "#E46D47",
                      offerIds: ["2c3d9514-4a64-453d-b1bf-f67154cf2c2d"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE TRYNEW",
                      description: "ABOVE ₹159",
                      offerType: "offers",
                      restId: "357476",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT 25% OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["e22c8ca8-1b8b-4e45-82a7-f01e80f9ae3a"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE PARTY",
                      description: "ABOVE ₹600",
                      offerType: "offers",
                      restId: "357476",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "15% OFF UPTO ₹300",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/15fb1cfe885005447dc8375e7970600f",
                      offerIds: ["ab6ca12d-e322-409c-8396-4b287bdeaf02"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE CITIFOODIE",
                      description: "ABOVE ₹1200",
                      offerType: "offers",
                      restId: "357476",
                      offerLogo:
                        "rng/md/ads/production/15fb1cfe885005447dc8375e7970600f",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "15% OFF UPTO ₹125",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/1acdb97aadcb61b323307845bda86535",
                      offerIds: ["f35bfc4a-7dd4-4f99-b16a-f1cf142a0849"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FEDERALCC125",
                      description: "ABOVE ₹399",
                      offerType: "offers",
                      restId: "357476",
                      offerLogo:
                        "rng/md/ads/production/1acdb97aadcb61b323307845bda86535",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹100 OFF",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/3a937ddacd3adb70c4543c4895213123",
                      offerIds: ["bdebd456-8170-4c12-9982-83192ea37f8e"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE AUCC100",
                      description: "ABOVE ₹399",
                      offerType: "offers",
                      restId: "357476",
                      offerLogo:
                        "rng/md/ads/production/3a937ddacd3adb70c4543c4895213123",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {},
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Biryani",
                      categories: [
                        {
                          title: "Veg Biryani",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "66513693",
                                  name: "Veg Biryani",
                                  category: "Biryani",
                                  imageId: "xvayqryxdjdkw0c3tovd",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "9425496",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 100,
                                            default: 1,
                                            id: "54336622",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 180,
                                            id: "31161988",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 340,
                                            id: "31161989",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "9425496",
                                            variationId: "54336622",
                                          },
                                        ],
                                        price: 10000,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "9425496",
                                            variationId: "31161988",
                                          },
                                        ],
                                        price: 18000,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "9425496",
                                            variationId: "31161989",
                                          },
                                        ],
                                        price: 34000,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  defaultPrice: 10000,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.7",
                                      ratingCount: "23 ratings",
                                      ratingCountV2: "23",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75245563",
                                  name: "Chaap Biryani",
                                  category: "Biryani",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11350759",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 110,
                                            default: 1,
                                            id: "54336620",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 199,
                                            id: "37335520",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 360,
                                            id: "37335521",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11350759",
                                            variationId: "54336620",
                                          },
                                        ],
                                        price: 11000,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350759",
                                            variationId: "37335520",
                                          },
                                        ],
                                        price: 19900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350759",
                                            variationId: "37335521",
                                          },
                                        ],
                                        price: 36000,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  defaultPrice: 11000,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Egg Biryani",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440485",
                                  name: "Egg Biryani",
                                  category: "Biryani",
                                  imageId: "ajsac97lutyac2oe6o1q",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "16317576",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 110,
                                            default: 1,
                                            id: "54336625",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 199,
                                            id: "54336623",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 360,
                                            id: "54336624",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "16317576",
                                            variationId: "54336625",
                                          },
                                        ],
                                        price: 11000,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "16317576",
                                            variationId: "54336623",
                                          },
                                        ],
                                        price: 19900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "16317576",
                                            variationId: "54336624",
                                          },
                                        ],
                                        price: 36000,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 11000,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.1",
                                      ratingCount: "11 ratings",
                                      ratingCountV2: "11",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Non Veg Biryani",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75245561",
                                  name: "Chicken Seekh Biryani",
                                  category: "Biryani",
                                  imageId: "ibxw0s6iimljvcjcfuds",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11350757",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 115,
                                            default: 1,
                                            id: "54336627",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 229,
                                            id: "37335514",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 429,
                                            id: "37335515",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11350757",
                                            variationId: "54336627",
                                          },
                                        ],
                                        price: 11500,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350757",
                                            variationId: "37335514",
                                          },
                                        ],
                                        price: 22900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350757",
                                            variationId: "37335515",
                                          },
                                        ],
                                        price: 42900,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 11500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.5",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75245562",
                                  name: "Mutton Seekh Biryani",
                                  category: "Biryani",
                                  imageId: "ukwpwxcmckudjpy5qvek",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11350758",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 115,
                                            default: 1,
                                            id: "54336629",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 229,
                                            id: "37335517",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 429,
                                            id: "37335518",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11350758",
                                            variationId: "54336629",
                                          },
                                        ],
                                        price: 11500,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350758",
                                            variationId: "37335517",
                                          },
                                        ],
                                        price: 22900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350758",
                                            variationId: "37335518",
                                          },
                                        ],
                                        price: 42900,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 11500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.5",
                                      ratingCount: "20 ratings",
                                      ratingCountV2: "20",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75245565",
                                  name: "Chicken Dum Biryani",
                                  category: "Biryani",
                                  imageId: "olvxrk875f2zkbqpehks",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11350761",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 115,
                                            default: 1,
                                            id: "54336626",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 229,
                                            id: "37335526",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 429,
                                            id: "37335527",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11350761",
                                            variationId: "54336626",
                                          },
                                        ],
                                        price: 11500,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350761",
                                            variationId: "37335526",
                                          },
                                        ],
                                        price: 22900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350761",
                                            variationId: "37335527",
                                          },
                                        ],
                                        price: 42900,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 11500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "88 ratings",
                                      ratingCountV2: "88",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75245568",
                                  name: "Chicken Tikka Biryani",
                                  category: "Biryani",
                                  imageId: "akfymzaq5a0eovjisw8r",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "11350763",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Qtr",
                                            price: 115,
                                            default: 1,
                                            id: "54336628",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Half",
                                            price: 229,
                                            id: "37335532",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 429,
                                            id: "37335533",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "11350763",
                                            variationId: "54336628",
                                          },
                                        ],
                                        price: 11500,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350763",
                                            variationId: "37335532",
                                          },
                                        ],
                                        price: 22900,
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "11350763",
                                            variationId: "37335533",
                                          },
                                        ],
                                        price: 42900,
                                      },
                                    ],
                                  },
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  defaultPrice: 11500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.4",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Drinks Combos",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "94440474",
                              name: "Chaap Biryani With Cold Drinks",
                              category: "Drinks Combos",
                              description:
                                "Chaap Biryani + Cold Drinks (250 ml)",
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "94440475",
                              name: "Chicken Biryani With Cold Drinks",
                              category: "Drinks Combos",
                              description:
                                "Chicken Biryani + Cold Drinks (250 ml)",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "94440476",
                              name: "Paneer Biryani With Cold Drinks",
                              category: "Drinks Combos",
                              description:
                                "Paneer Biryani + Cold Drinks (250 ml)",
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "94440477",
                              name: "Veg Biryani With Cold Drinks",
                              category: "Drinks Combos",
                              description: "Veg Biryani + Cold Drinks (250 ml)",
                              inStock: 1,
                              isVeg: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Snacks",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75245603",
                              name: "Chicken Seekh Kebab",
                              category: "Snacks",
                              imageId: "dd4hroojjl29pqfc7lan",
                              inStock: 1,
                              price: 26000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75245604",
                              name: "Mutton Seekh Kebab",
                              category: "Snacks",
                              imageId: "hpewd1e06rwuvacixxvv",
                              inStock: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Family Pack",
                      categories: [
                        {
                          title: "Veg Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440489",
                                  name: "Veg Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 159900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440490",
                                  name: "Veg Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 59900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440491",
                                  name: "Veg Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 99900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440492",
                                  name: "Veg Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 139900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Egg Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440493",
                                  name: "Egg Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 149900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440494",
                                  name: "Egg Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 64900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440495",
                                  name: "Egg Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 99900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440496",
                                  name: "Egg Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 129900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Paneer Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440497",
                                  name: "Paneer Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 149900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440498",
                                  name: "Paneer Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 64900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440499",
                                  name: "Paneer Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 94900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440500",
                                  name: "Paneer Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 129900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Chaap Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440501",
                                  name: "Chaap Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 149900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440502",
                                  name: "Chaap Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 64900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440503",
                                  name: "Chaap Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 94900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440504",
                                  name: "Chaap Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 129900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Chicken Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440505",
                                  name: "Chicken Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 179900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440506",
                                  name: "Chicken Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 69900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440507",
                                  name: "Chicken Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 109900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440508",
                                  name: "Chicken Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 149900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Chicken Seekh Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440509",
                                  name: "Chicken Seekh Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 179900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440510",
                                  name: "Chicken Seekh Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 69900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440511",
                                  name: "Chicken Seekh Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 109900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440512",
                                  name: "Chicken Seekh Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 149900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Mutton Seekh Biryani Family Pack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440513",
                                  name: "Mutton Seekh Biryani [10 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 179900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440514",
                                  name: "Mutton Seekh Biryani [4 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 69900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440515",
                                  name: "Mutton Seekh Biryani [6 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 109900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "94440516",
                                  name: "Mutton Seekh Biryani [8 Person]",
                                  category: "Family Pack",
                                  inStock: 1,
                                  price: 149900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Shakes",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75245605",
                              name: "Mango Shake",
                              category: "Shakes",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75245606",
                              name: "Pineapple Shake",
                              category: "Shakes",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75245607",
                              name: "Strawberry Shake",
                              category: "Shakes",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75245608",
                              name: "Butterscotch Shake",
                              category: "Shakes",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "94440484",
                              name: "Cold Coffee",
                              category: "Shakes",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["Applied for license"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Dilli 6 Biryani",
                      area: "Rohini",
                      completeAddress:
                        "House no 230 2nd floor BLK-G PKT-21 Sec 7 Rohini city Delhi ,  North West , Delhi-110085",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "390ec32a-2a67-4447-a616-117ad79e5217",
  sid: "8bh4b7a5-4988-4f63-8095-e117cb67fcfd",
  deviceId: "e609f99d-c0bd-d806-6b1a-bb4ff69625d8",
  csrfToken: "rfQCikECrisR-Z5J8IMH3YtWZKzpJAUdVvgGjSig",
};
