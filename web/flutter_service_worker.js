'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "86172456e1af463d18046ab5327f6ad5",
"assets/AssetManifest.bin.json": "c70a413cbad6ebc980dedf5be1dd6f2f",
"assets/AssetManifest.json": "0ac4a8e8f839598c0b8e23418743a50e",
"assets/assets/font/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/assets/font/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/font/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/font/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/image/about_icon.png": "31d86223a70f4af5343f043f5abae4e6",
"assets/assets/image/about_us.png": "3a558cf26cbac164b15cccc51821c929",
"assets/assets/image/ac_icon.png": "e58923e6839902f98028606a4fac0c3f",
"assets/assets/image/address_city.png": "6665cf2b6ad6ff098bbd195166ca05b2",
"assets/assets/image/address_icon.png": "703166cce340d918c2587f98dbd66f6d",
"assets/assets/image/address_select.png": "a9d1be01b5e266e9f17677a2ff7f9992",
"assets/assets/image/address_type_home.png": "c371125d4fd93b0e60540b3187af7635",
"assets/assets/image/address_type_journey.png": "5fd96f0b76fdc3d6bde84111b9976231",
"assets/assets/image/address_type_office.png": "bbbf7a0aa6f493aed01bd38882ade72c",
"assets/assets/image/address_unselect.png": "f129ddf0dda6d9bae3236d697e82e223",
"assets/assets/image/announcement.png": "a32121d563d3aa79b5ba1b8e3346cf85",
"assets/assets/image/apple_logo.png": "6e4f5b96860ac0b0bbf8c5d1fa797e72",
"assets/assets/image/arabic.png": "0378edd124ce1f212f9845e4c42ea177",
"assets/assets/image/bangla.png": "b1bea6b66d125fd0468d5bb462996c71",
"assets/assets/image/bank_icon.png": "cd7cf29783ef9036b01fe57452d34f6a",
"assets/assets/image/banner1.png": "4e0ae8b7d5bbd4dcb14b8ff8265dd7f0",
"assets/assets/image/banner2.png": "deb1a813fb9636f97e13e4fab9562a38",
"assets/assets/image/banner_bg.png": "268ee13dc5d4924314f46277ca966ad7",
"assets/assets/image/bkash.png": "5878313ae1a44565a16f91ee09ebc097",
"assets/assets/image/booking_complete_car.png": "c743a22cec776da8d0de57ad22bb0473",
"assets/assets/image/booking_details_selected.png": "1d1665b7175ca1f8d9efd2963cba77d9",
"assets/assets/image/booking_details_unselected.png": "0838edcea35053cb1a73e54dab667e2b",
"assets/assets/image/call.png": "917863d0e098d9b696372372a986c2b8",
"assets/assets/image/cancel.gif": "b5ff009064074c663d349784c0365e6f",
"assets/assets/image/cancelation.png": "4c4fc28be71c227111db64b7e680e47e",
"assets/assets/image/cancelation_icon.png": "16ba10df95911fdac55de208a34e1d7e",
"assets/assets/image/cancellation_icon.png": "9480e7040347b8bb2404deb10bdc7e0d",
"assets/assets/image/car_icon.png": "b6a25c6be29663dd060ec0f89c785591",
"assets/assets/image/cash.png": "6b87c15b8e8220d823e86d89eb207951",
"assets/assets/image/cash_back.svg": "5f700d5f460c12672b9c04754fbda752",
"assets/assets/image/cash_on_delivery.png": "27223f64aaff7de37038f029307ad291",
"assets/assets/image/chat.png": "496d5e586db38fd1516ddff572d3897e",
"assets/assets/image/chat_icon.png": "f2a3b47657635597bcd2be4ed164e392",
"assets/assets/image/chat_order_details.png": "709e3d8fd40bb33f97568cb359d272f8",
"assets/assets/image/chat_support.png": "ccfd4c00002a12b5b6c4010c99804c58",
"assets/assets/image/check.gif": "6535eb254cb1dc52741c8cb4bba6ebe9",
"assets/assets/image/checked.png": "f66f21ca8692618294ace64b4a60bfb2",
"assets/assets/image/city.png": "0a6981ab14f88772865b1dfb8b6aa094",
"assets/assets/image/clock.png": "6f8cff0bae9627fb8c420e401e9a921c",
"assets/assets/image/cod_icon.png": "13ed20bc5944cf43246b894f845bf3b9",
"assets/assets/image/complete_checked.png": "788cbfae2a1490b53c837045266b046e",
"assets/assets/image/complete_selected.png": "30544485a8191c5322d22bc197b52a64",
"assets/assets/image/complete_unselected.png": "e652f02721e93040d2f388e6bdde58d5",
"assets/assets/image/confirmed.gif": "61486c5ff13985b8945bb9744352693d",
"assets/assets/image/congratulation_dark.gif": "d50078a69cf95c55df32311dbd014fe6",
"assets/assets/image/congratulation_light.gif": "7403eb4881819ba043ff7e8ef4197828",
"assets/assets/image/contact_us.png": "c2153ccc04c74b0faf8d3dd38205c60c",
"assets/assets/image/cooking.gif": "abd74bbae829c2405f0ee2f87428c2b2",
"assets/assets/image/copy_coupon.png": "3bbb9524bce83f94fd14abdb9c8ecfc1",
"assets/assets/image/coupon.png": "cfc95c5a80ed1e88f71ab60691b79aef",
"assets/assets/image/coupon_bg.png": "2edec7b5ddaa338a42f0dabfdb595b7a",
"assets/assets/image/coupon_bg_dark.png": "86c2f7fbe1e2b9ebed49a6475827f573",
"assets/assets/image/coupon_bg_light.png": "3339bf479843425a58e6f16c7fe53358",
"assets/assets/image/coupon_icon.png": "8af1653f7b279371c4f5c5a70b87aa17",
"assets/assets/image/coupon_offer_icon.png": "cafa8884cb4d360b912388f66e6b246a",
"assets/assets/image/credit.png": "f55816464a474fb7e7c10758bda2a05b",
"assets/assets/image/cutlery.png": "260cf1aaf41115ef16fe51063005ef88",
"assets/assets/image/debit.png": "e36c3fdce3aac2ecaf50bc3a598e37d4",
"assets/assets/image/delivery.png": "42d4180c098e8b571e205b1bb228fb0d",
"assets/assets/image/delivery_icon.png": "0221b070c13d0e5a8ca726e783cda36e",
"assets/assets/image/delivery_location.png": "1ce1dcf8bf848ab6e72a6916505fc551",
"assets/assets/image/delivery_man_join.png": "b623bcc3a9cc2a505b3bec7601bd4af0",
"assets/assets/image/delivery_man_marker.png": "ff4d6a62996c41bfbdd40f1729a65762",
"assets/assets/image/demo_brand_car.png": "3399efe126b8d2e8b6f2635b97fd8170",
"assets/assets/image/demo_car.png": "a4b880969ec1476b5d034be5b5201d5f",
"assets/assets/image/demo_car_model.png": "0d0b6bcdd809f8cac95f504fbd452608",
"assets/assets/image/demo_car_type.png": "e93a942d0c1914d4b81f13af96c8bafd",
"assets/assets/image/digital_pay.png": "e0197932ccbe33229d59dc23754a3697",
"assets/assets/image/digital_payment.png": "49b1e3bc90ca48aa928007d5e9247aa0",
"assets/assets/image/discount_offer_icon.png": "bcc2f5edd458a505bb3f5b9b3a604615",
"assets/assets/image/distance.png": "25b3dfb46aa30562490dc4d0e28254c7",
"assets/assets/image/distance_line.png": "89c005b0b1995ac36fd1587dd24f6102",
"assets/assets/image/dm_icon.png": "9df1223348d2d45dc602eddcdfce494f",
"assets/assets/image/driver_icon.png": "7cf92258446834963f387951f3397b70",
"assets/assets/image/edit.png": "6b1834ffd4fd9b7d6acec5ff38fee653",
"assets/assets/image/edit_delivery.png": "71ae9aa3bd2580afe30a0a50bdf98ef7",
"assets/assets/image/efood.png": "c6d099f73b9809dad4041d1eb7886ee4",
"assets/assets/image/email_icon.png": "898af77f7a2ae7f98aa3e8010ce44eb9",
"assets/assets/image/empty_address.png": "9087d636217f90b4b11e929edea1adf8",
"assets/assets/image/empty_box.png": "8a8a81d5d53c0e66da254034f672f3ff",
"assets/assets/image/empty_cart.png": "ced282db6ad362c0187e1973ff84597e",
"assets/assets/image/english.png": "664617c1e570b1ee502a5839e7feb947",
"assets/assets/image/facebook.png": "0e3d7aa3e6890366831a2904b6af1e05",
"assets/assets/image/favourite_icon.svg": "5b5a1e6d15ca8674f80ef430b4a2d4a5",
"assets/assets/image/favourite_select.png": "08c11ec1d33169c6c81435a636ee9475",
"assets/assets/image/favourite_unselect.png": "18a7400f03f85901fc3faa68bcaff5d1",
"assets/assets/image/filter.png": "f3827d789c140d116c65f7eca9033333",
"assets/assets/image/filter_icon.png": "7d4ed9c28bf9078f67d60423acefe89c",
"assets/assets/image/find_us_here.png": "076eab1f76815c8839a1071a04ce2cd8",
"assets/assets/image/flutter_web.png": "86f79a05c5e1bbf81e1396cb5d9a1e91",
"assets/assets/image/food_module_banner_bg.png": "6f536ade37f0ada0ac7fe38fae3e14ff",
"assets/assets/image/forget_icon.png": "12cfa4a878788f99f13757b9141d6938",
"assets/assets/image/forgot.png": "e73b71efe83eb7aba98832eb04e2d995",
"assets/assets/image/free_delivery.png": "6730d93ef1d40dc7761f7d10a0cfc695",
"assets/assets/image/from.png": "6e30f6dc1560294fa136b29ffa3ef9fd",
"assets/assets/image/giftbox.gif": "0f9042b692714dabc3dddabb0042578d",
"assets/assets/image/gift_box1.gif": "955c7fbec1327c74fce4aa3e1d505abc",
"assets/assets/image/google.png": "1b943d724cb2d7c49f888f750ce3a479",
"assets/assets/image/guest.png": "bd8e7392430a0bc4c9c8199308357ff4",
"assets/assets/image/guest_icon.png": "5a6d7cd0cefea1a90258a8ad73b74632",
"assets/assets/image/guest_icon_light.png": "19ecfb8d6c6402775e767a36fb962494",
"assets/assets/image/halal_tag.svg": "697322881707dfaacdd24cca270ee753",
"assets/assets/image/handover.gif": "eb676e0efd94adb92649665f4dfa24bb",
"assets/assets/image/help_address.png": "26d427cfdd6e28eb8153e3dd6ed2179e",
"assets/assets/image/help_email.png": "3d1987885a5884075ac12ff52d749809",
"assets/assets/image/help_icon.png": "567ee62e2424627f7db40540726957f9",
"assets/assets/image/help_phone.png": "38f547927784b4b0d03ba6fc3f5bdebf",
"assets/assets/image/highlight_bg.svg": "e3c3943fa2e14a2175deaa3663345b07",
"assets/assets/image/highlight_dark_bg.svg": "711d9cc700852c690b85f078ad56764d",
"assets/assets/image/highlight_icon.png": "3bc1b1330c4b182ff9c3e1427fbdfdd4",
"assets/assets/image/home_icon.png": "ee30888e0e1491318b41efe3c3d53c19",
"assets/assets/image/home_select.png": "b065d1123afe55a710e782ede0c16f89",
"assets/assets/image/home_unselect.png": "85d2ed7e9da66e557b179a085ca98974",
"assets/assets/image/hour_cost_icon.png": "cfb39b4ded099378e17c3843b800b4d8",
"assets/assets/image/house.png": "1c504c1a5c5563127c783a1c235f4037",
"assets/assets/image/image.png": "2e5aea0e65e5be5cea13c325ea649ee1",
"assets/assets/image/instagram.png": "a4fbd22a6c9bc2522bd7a47d9c52251b",
"assets/assets/image/km_cost_icon.png": "f1ea75d7f284055e1aee3de82ffe21dc",
"assets/assets/image/landing_app_store.png": "87e89fd6617e35ceb2299609bd0074c0",
"assets/assets/image/landing_bg.png": "6198c26abd5c4befeff28e6381dd3aa3",
"assets/assets/image/landing_checkout.png": "2cd5f8861b2d77aa1aba03377d9e63cf",
"assets/assets/image/landing_choose_location.png": "4b976e6c17e9694527e8735405ddf70b",
"assets/assets/image/landing_delivery_man.png": "a64e2ae11e1bc7afd30036c37daf7e00",
"assets/assets/image/landing_excellent.png": "f08eedc4aebdca29fe58fe08dc392635",
"assets/assets/image/landing_google_play.png": "e86a6e8fa7bc26027e76523fe6ceff2c",
"assets/assets/image/landing_stores.png": "5bc3b6e956d1cc226180853884f27da8",
"assets/assets/image/landing_store_open.png": "942c97a6c1cbf4c6c63fd882c3578573",
"assets/assets/image/landing_trusted.png": "b7fcb0421943ae786de4ecbc81cf49e2",
"assets/assets/image/language.png": "898e5b4c7c47345d97f91c2c7f377c8a",
"assets/assets/image/language_bg.png": "64109daf7c2ae28102a1b0a9809a96aa",
"assets/assets/image/language_bg.svg": "87663745745b9d42c492d4d2a44c2d25",
"assets/assets/image/language_icon.png": "cf03b59f056a6e0640a23a3575bd4a3b",
"assets/assets/image/linkedin.png": "a4b7c4077cd59ac29fc209582680fb2b",
"assets/assets/image/live_marker.png": "b24313e75c1f0636afb094be8edfa844",
"assets/assets/image/location.png": "da7e9406b80a9e4c6decd651991d5731",
"assets/assets/image/location_confirm.png": "52f75e6335bb8222be75921c767e5311",
"assets/assets/image/location_marker.png": "f429ec68aa7781aef972931d682f3563",
"assets/assets/image/lock.png": "1dc98b7e6cc1dc406dc8b19b94cedc49",
"assets/assets/image/logo.png": "5a3adf129e2c937ce33e29f42fa553bb",
"assets/assets/image/log_out.png": "2a4e0507a9000bf2579b00f94a3e47ac",
"assets/assets/image/loyal.png": "0acbe0ff124115f525ee2d09125de694",
"assets/assets/image/loyalty_convert_icon.png": "a520ae42938218e622b92b0c9931eef1",
"assets/assets/image/loyalty_icon.png": "c64e9ddbc35a6e86d65be92f5b254a8a",
"assets/assets/image/l_restaurant.png": "b50b671a2938a965a0cd6137ebf82aae",
"assets/assets/image/mail.png": "249d5d5120f8dcdbf390b3de6f27e498",
"assets/assets/image/mail_icon.png": "967fec557e82ab8aff2b9280836bb960",
"assets/assets/image/maintenance.png": "3cf6759b308c7c9731d5294f400038e1",
"assets/assets/image/map.png": "1cf454c171e3b482e558c56fd181869d",
"assets/assets/image/marker_store.png": "495ad042d719a0f8f8704ed265022231",
"assets/assets/image/menu.png": "f943a9645055c905f861122221a64798",
"assets/assets/image/message.png": "ca9cfd0c532b6d96624b3b43e8962f24",
"assets/assets/image/message_select.png": "d70356c77b0b86b0b106e29caf9f8134",
"assets/assets/image/message_unselect.png": "5efd4fe742673b845e6f3272d3cc8c01",
"assets/assets/image/messenger_icon.png": "ab759eb420470c6464560c2f2718213e",
"assets/assets/image/module_icon.png": "a330d00a63f9da86a06659d36c1c2453",
"assets/assets/image/money.png": "033cfbd274f9fd1677ec9cf169726718",
"assets/assets/image/most_popular_icon.png": "2b774df5700d05c79e48adefcea18389",
"assets/assets/image/my_location_marker.png": "fc74787f8fce199d9b2fddbfcf67e7b3",
"assets/assets/image/non_veg.png": "782f91ccfd64aa446006166a5aebe501",
"assets/assets/image/non_veg_logo.png": "45391cfe68fdf482d865e9424810b665",
"assets/assets/image/note.png": "583e5460a1bfe0e6d17e6eaeb101fdb5",
"assets/assets/image/notification_placeholder.jpg": "166de4e32af452d360939df39e90a654",
"assets/assets/image/no_address.png": "d4023d47985b7f0c29ffc0ddbdb0e020",
"assets/assets/image/no_coupon.png": "3cd0513a7b3f63ede3b93b69446f6f0f",
"assets/assets/image/no_data_found.png": "465bcfe12ac9ad345f5ee94027270ec2",
"assets/assets/image/no_internet.png": "1f7c142aed5ee88448ead4341c6fa362",
"assets/assets/image/offline_payment.png": "1d0832be2d45069fdc1dfc4808abbaaa",
"assets/assets/image/onboard_1.png": "187f735d50c8ba7f665614aff7934dca",
"assets/assets/image/onboard_2.png": "0dff3e7cedd76df8bcc400584952ad4e",
"assets/assets/image/onboard_3.png": "4092bbe556fc42f1c25ea29f002381f5",
"assets/assets/image/ongoing_animation.gif": "1b0d4e1a05e60ba9beec2e2602d34689",
"assets/assets/image/on_the_way.gif": "5f78d38bfa1e93fe7739fb58d425aab1",
"assets/assets/image/orders.png": "83ad3fdd8a9aa0a5c1f13e397ce798dc",
"assets/assets/image/order_select.png": "976b748fe3e4241be400b9790bdcda55",
"assets/assets/image/order_unselect.png": "86a5a6d974db7b7a22616561c6ef2fd7",
"assets/assets/image/other_icon.png": "ea59044a2bf612d001ee44185ff4510b",
"assets/assets/image/parcel.png": "a187fc238c21f3eb0e361446f07345bf",
"assets/assets/image/parcel_instruction_icon.png": "9ddd98bf5c927ebe25a63d7a0154bf59",
"assets/assets/image/partial_pay.png": "bc354121568e48e999520a47667a200c",
"assets/assets/image/partial_wallet.png": "acd3c64e5bd87a593e06df5f7813f5bc",
"assets/assets/image/password_icon.png": "269647e0a88515188a736391ef52d597",
"assets/assets/image/payment_select.png": "1c7373668f925a0251b3548760eace5c",
"assets/assets/image/payment_selected.png": "215b847d0dd80e3b729694ee04c7ec4b",
"assets/assets/image/payment_unselected.png": "ba60cf2798ed2c8c2262482d6eb7b925",
"assets/assets/image/payment_unselected_grey.png": "5701701df15de933478007468decb08b",
"assets/assets/image/paypal_icon.png": "7dab4ee85477a376e6ba9d81720fe825",
"assets/assets/image/paystack.png": "2199e3655989aa1d4810b679e9ad2d5f",
"assets/assets/image/pending.gif": "80e0e5d14702425362561e6596eb02d5",
"assets/assets/image/pending_food.gif": "aeb880c639df8781585f3e816907fc69",
"assets/assets/image/pending_for_all.gif": "e22c31aad4cfda4d6d3291f19fda8314",
"assets/assets/image/percent_offer.png": "b96b8941ee8ad98e777a4c869f2ffc08",
"assets/assets/image/percent_tag.png": "07c397df57703818ef3134e4efd7e66b",
"assets/assets/image/petrol_icon.png": "01b6ef89a9df3452ff06a84e32633d3c",
"assets/assets/image/phone_order_details.png": "a98e1a26e567cbeae7c3594624b8c7ad",
"assets/assets/image/pick_and_destination_icon.png": "66e0c5bb185cfb9d5490cc8eb6c6975a",
"assets/assets/image/pick_marker.png": "63f3dd1f11ed6d3e22aabf5bb488491a",
"assets/assets/image/pick_store_marker.svg": "ba6a8017a0b873c8dab3ac315965c05b",
"assets/assets/image/pinterest.png": "5e56e6508f46d871b5e9763cb0c13531",
"assets/assets/image/placeholder.jpg": "81abc0d9b59a9aba9191102834f2d978",
"assets/assets/image/point_icon.png": "9199d095b00a06bde2b112d27eb60e7d",
"assets/assets/image/policy.png": "b34dd2e7ac20b07c1c877c44179b6bdf",
"assets/assets/image/predcription_icon.png": "0977bb8d66ff2035cf69da0606ad69df",
"assets/assets/image/preparing_food.gif": "85d834af9453e4441c0dd17050f03c32",
"assets/assets/image/preparing_grocery.gif": "28e1706bb19d2ee723883f26e294f7d7",
"assets/assets/image/privacy_icon.png": "15691df453bbc832b44c3d3050f34dc1",
"assets/assets/image/processing.gif": "19b1bcfdab9fcb1017b880ecb02e10f9",
"assets/assets/image/profile.png": "c3346a24c73ac6c7ca85fff64f56d3c5",
"assets/assets/image/profile_bg.png": "88b5b8eaf0c833152f0b45c8a3cad3c3",
"assets/assets/image/profile_delete.png": "b2e2cfdc48246ad384c8f6a248d3c953",
"assets/assets/image/profile_icon.png": "ab555ae621b4afbce88650e526b41d11",
"assets/assets/image/promo_code_bg.png": "556174b08e5f829c22bc8155b00c4956",
"assets/assets/image/promo_code_bg_web.png": "f95b4c7782af7cbc30b4b0e233237cc6",
"assets/assets/image/refer_bg.svg": "93d8c9ff9ee30c9ff1675b9d97feb545",
"assets/assets/image/refer_code.png": "57c31027f826941895d91df83c64932f",
"assets/assets/image/refer_earn.png": "84c400ae6f045bbebd43f10e8ebbaa5d",
"assets/assets/image/refer_icon.png": "3ef9b2cce87e2792df1eb46818e8af02",
"assets/assets/image/refund.png": "aeaf7c9da15f582be65fdca87ec367c0",
"assets/assets/image/refund_icon.png": "41f36ce91cbf63e18225fcc77a7e355c",
"assets/assets/image/restaurant_join.png": "2edc51739badc19381f10bfbb8b06717",
"assets/assets/image/restaurant_marker.png": "c79257f53b0eaff4e32b01a4d768d174",
"assets/assets/image/rider_add_address.png": "4203a497f21e50fb2a08e328fa345452",
"assets/assets/image/rider_call_icon.png": "67865f333d7b76f071cb08c3590b497d",
"assets/assets/image/rider_car_hp.png": "bcda83bd3e4c298c91de14b0d30cce09",
"assets/assets/image/rider_chat_icon.png": "21649b31642d18ae90fafe45d560ac27",
"assets/assets/image/rider_coupon.png": "24cc2e560789484a92aa26a8c8677bf4",
"assets/assets/image/rider_km.png": "8a3e5f3e86d60bd7d8dd7862ab61fb78",
"assets/assets/image/rider_search.png": "45d36cf17868faa3e698f1cfbe46b648",
"assets/assets/image/rider_seat_icon.png": "57bdea12b3e8d246f10a6cf97e26a52c",
"assets/assets/image/rider_use_coupon.png": "731d93ef362ae344bb5352e40466dbc3",
"assets/assets/image/ride_return.png": "d524b5d2855fb4c935ce305062a88b64",
"assets/assets/image/route.png": "aaec4a412a607a0291bee180e3cc1847",
"assets/assets/image/search_icon.png": "114330b14b32a695bdd075be3f92b1d1",
"assets/assets/image/send.png": "507bfa6b99f901ddd8029183c3108ac2",
"assets/assets/image/sender.png": "6afc76036d3cfeecb75cc5411845820e",
"assets/assets/image/send_icon_web.png": "05462f7cc20244615abb505ba2a7085a",
"assets/assets/image/send_us_mail.png": "e104a4c03862510bce667d2aef0a71c5",
"assets/assets/image/shipping_icon.png": "15f4750ca18f718024231c8b36b8da6b",
"assets/assets/image/shipping_policy.png": "38386c9fb86a146011da4025c53976cc",
"assets/assets/image/shopping_bag_icon.png": "c1fb46cdab089968bf7157d9aeb42333",
"assets/assets/image/shopping_cart.png": "42eee148a19e2ad8bf2a6ee9d092172e",
"assets/assets/image/shop_icon.svg": "e83ae263ce7d080ff9d4a54cbbaf7926",
"assets/assets/image/shop_module_banner_bg.png": "7e9fce12fcc6951ce9616a7f926486cd",
"assets/assets/image/social_facebook.png": "6e89048f0088fb258954775a4af5dc9a",
"assets/assets/image/spanish.png": "efe41d8c5ed5999dec5a9a304461c5cc",
"assets/assets/image/sslcommerz.png": "91ae485e1dc5bba656b1c17b8500505b",
"assets/assets/image/star_fill.png": "3722ce50ede027ce9e7f20f8965ce6ef",
"assets/assets/image/store_delivery_time_icon.png": "facb47d776e853779315bfc0c8d9824b",
"assets/assets/image/store_icon.png": "6c114036a8843fdfef70a8d4455fffd0",
"assets/assets/image/store_location_icon.png": "389c99a2255f44240b23e09afe08e8ad",
"assets/assets/image/store_marker.png": "1d86244cc908193668027776a00dbacc",
"assets/assets/image/store_registration_success.svg": "549d74925a0bd10b2358e43fe1c347fa",
"assets/assets/image/stripe.png": "edd2adec675bb1d3326ff3c1b2aec856",
"assets/assets/image/suggestion_message.png": "96d2103d385542f4575a697945847a74",
"assets/assets/image/support.png": "ecd41f9fa1b5d5fad3c527c2c0d64b9c",
"assets/assets/image/support_image.png": "0a7e6b1e601763c5ced8c770082069ca",
"assets/assets/image/terms.png": "09d3ca84434218336b985ae8159abcfe",
"assets/assets/image/terms_icon.png": "e913528485907c9471989f0f847f19a0",
"assets/assets/image/to_marker.png": "6206631c68c37006534ac784ddb10b18",
"assets/assets/image/tracking.png": "7fc12acaf51cb4cc1fccbce2e4ed4f93",
"assets/assets/image/track_delivered.png": "ad40539c795c5a9c5a9987b9d8f7083a",
"assets/assets/image/track_on_the_way.png": "1702eab927a63c3b81e72635ded05b4e",
"assets/assets/image/track_order_accept.png": "0e342d48be283be34bcd2a9848006711",
"assets/assets/image/track_order_place.png": "155551213b803602ae4f92dd5d4ad896",
"assets/assets/image/track_order_preparing.png": "f10f6d150b47e6aa8c083bd191508a6a",
"assets/assets/image/truck.png": "bb1a792bb64c6895a5413feaf510013d",
"assets/assets/image/twitter.png": "ab8a44e945b0435e81bb484d3915217a",
"assets/assets/image/unfavourite_icon.svg": "567368130f96ad1f13ce00bd06ce65cb",
"assets/assets/image/update.png": "b7cfdbc8ad908a9db95e78e36a0edda8",
"assets/assets/image/user.png": "3c8bfcff49071020e373c4479bf65b9e",
"assets/assets/image/user_marker.png": "4fb391e4b52e6cdc170736c4893b6e62",
"assets/assets/image/vat_tax_icon.svg": "5a1554e4f498bdf82051d4f4f5d173a0",
"assets/assets/image/veg.png": "9996964f9873848ea868f11ce75268da",
"assets/assets/image/vegetarian.png": "c17a34697fede82c6a03c1aa2cd2930d",
"assets/assets/image/viver_icon.png": "8382a456d59d414d9e92defbb9a6f5c1",
"assets/assets/image/wallet.png": "2041d48ff7bffd8df3a5b46703cdcfb1",
"assets/assets/image/wallet_bonus.png": "09114042a3d3f876269571e53408793a",
"assets/assets/image/wallet_credit.png": "f7989bae7f3cbf941e27e2d9a570336e",
"assets/assets/image/wallet_debit.png": "b6f78628c4b0428a1fb3c39f4a4f260b",
"assets/assets/image/wallet_icon.png": "0de923cfe563e07394ebfbabd1be948a",
"assets/assets/image/wallet_profile.png": "240804ee1653ae9728923ce7ff800e7a",
"assets/assets/image/warning.png": "9cdb1ba71f1be0698d4dd4aa33fcec08",
"assets/assets/image/weather.png": "8820b4e6a06ca1c7794bf13b07eb21c7",
"assets/assets/image/whatsapp_icon.png": "1f9e0eab0cfe56780b3eeb86923d6ebd",
"assets/assets/image/work_icon.png": "75ad5177c404d34d9a513aaeb3b58034",
"assets/assets/image/youtube.png": "1e18aa3aa7931deb8f675e7b63018cfc",
"assets/assets/language/ar.json": "68604bd2bfaabbf6158801bbd8da2691",
"assets/assets/language/bn.json": "4f5bc316ee21de26a2d7dc4ee0eb720a",
"assets/assets/language/en.json": "3b7065888b9b8bed20d47bda3842358e",
"assets/assets/language/es.json": "4e29e82bfad8008125c1f490adb1c1f0",
"assets/assets/map/dark_map.json": "5b4f100b89841019da37e2d6c56f9cea",
"assets/assets/map/light_map.json": "d751713988987e9331980363e24189ce",
"assets/FontManifest.json": "569adbcb65082f8c8fed9d0f91829361",
"assets/fonts/MaterialIcons-Regular.otf": "9008919d24536ac5c032376823b65b19",
"assets/NOTICES": "7ab847ce11a3fd4da01cd9e0ecba45c0",
"assets/packages/country_code_picker/flags/ad.png": "796914c894c19b68adf1a85057378dbc",
"assets/packages/country_code_picker/flags/ae.png": "045eddd7da0ef9fb3a7593d7d2262659",
"assets/packages/country_code_picker/flags/af.png": "44bc280cbce3feb6ad13094636033999",
"assets/packages/country_code_picker/flags/ag.png": "9bae91983418f15d9b8ffda5ba340c4e",
"assets/packages/country_code_picker/flags/ai.png": "cfb0f715fc17e9d7c8662987fbe30867",
"assets/packages/country_code_picker/flags/al.png": "af06d6e1028d16ec472d94e9bf04d593",
"assets/packages/country_code_picker/flags/am.png": "2de892fa2f750d73118b1aafaf857884",
"assets/packages/country_code_picker/flags/an.png": "469f91bffae95b6ad7c299ac800ee19d",
"assets/packages/country_code_picker/flags/ao.png": "d19240c02a02e59c3c1ec0959f877f2e",
"assets/packages/country_code_picker/flags/aq.png": "c57c903b39fe5e2ba1e01bc3d330296c",
"assets/packages/country_code_picker/flags/ar.png": "bd71b7609d743ab9ecfb600e10ac7070",
"assets/packages/country_code_picker/flags/as.png": "830d17d172d2626e13bc6397befa74f3",
"assets/packages/country_code_picker/flags/at.png": "7edbeb0f5facb47054a894a5deb4533c",
"assets/packages/country_code_picker/flags/au.png": "600835121397ea512cea1f3204278329",
"assets/packages/country_code_picker/flags/aw.png": "8966dbf74a9f3fd342b8d08768e134cc",
"assets/packages/country_code_picker/flags/ax.png": "ffffd1de8a677dc02a47eb8f0e98d9ac",
"assets/packages/country_code_picker/flags/az.png": "967d8ee83bfe2f84234525feab9d1d4c",
"assets/packages/country_code_picker/flags/ba.png": "9faf88de03becfcd39b6231e79e51c2e",
"assets/packages/country_code_picker/flags/bb.png": "a5bb4503d41e97c08b2d4a9dd934fa30",
"assets/packages/country_code_picker/flags/bd.png": "5fbfa1a996e6da8ad4c5f09efc904798",
"assets/packages/country_code_picker/flags/be.png": "498270989eaefce71c393075c6e154c8",
"assets/packages/country_code_picker/flags/bf.png": "9b91173a8f8bb52b1eca2e97908f55dd",
"assets/packages/country_code_picker/flags/bg.png": "d591e9fa192837524f57db9ab2020a9e",
"assets/packages/country_code_picker/flags/bh.png": "6e48934b768705ca98a7d1e56422dc83",
"assets/packages/country_code_picker/flags/bi.png": "fb60b979ef7d78391bb32896af8b7021",
"assets/packages/country_code_picker/flags/bj.png": "9b503fbf4131f93fbe7b574b8c74357e",
"assets/packages/country_code_picker/flags/bl.png": "30f55fe505cb4f3ddc09a890d4073ebe",
"assets/packages/country_code_picker/flags/bm.png": "eb2492b804c9028f3822cdb1f83a48e2",
"assets/packages/country_code_picker/flags/bn.png": "94d863533155418d07a607b52ca1b701",
"assets/packages/country_code_picker/flags/bo.png": "92c247480f38f66397df4eb1f8ff0a68",
"assets/packages/country_code_picker/flags/bq.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/country_code_picker/flags/br.png": "8fa9d6f8a64981d554e48f125c59c924",
"assets/packages/country_code_picker/flags/bs.png": "814a9a20dd15d78f555e8029795821f3",
"assets/packages/country_code_picker/flags/bt.png": "3c0fed3f67d5aa1132355ed76d2a14d0",
"assets/packages/country_code_picker/flags/bv.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/bw.png": "04fa1f47fc150e7e10938a2f497795be",
"assets/packages/country_code_picker/flags/by.png": "03f5334e6ab8a537d0fc03d76a4e0c8a",
"assets/packages/country_code_picker/flags/bz.png": "e95df47896e2a25df726c1dccf8af9ab",
"assets/packages/country_code_picker/flags/ca.png": "bc87852952310960507a2d2e590c92bf",
"assets/packages/country_code_picker/flags/cc.png": "126eedd79580be7279fec9bb78add64d",
"assets/packages/country_code_picker/flags/cd.png": "072243e38f84b5d2a7c39092fa883dda",
"assets/packages/country_code_picker/flags/cf.png": "625ad124ba8147122ee198ae5b9f061e",
"assets/packages/country_code_picker/flags/cg.png": "7ea7b458a77558527c030a5580b06779",
"assets/packages/country_code_picker/flags/ch.png": "8d7a211fd742d4dea9d1124672b88cda",
"assets/packages/country_code_picker/flags/ci.png": "0f94edf22f735b4455ac7597efb47ca5",
"assets/packages/country_code_picker/flags/ck.png": "35c6c878d96485422e28461bb46e7d9f",
"assets/packages/country_code_picker/flags/cl.png": "658cdc5c9fd73213495f1800ce1e2b78",
"assets/packages/country_code_picker/flags/cm.png": "89f02c01702cb245938f3d62db24f75d",
"assets/packages/country_code_picker/flags/cn.png": "6b8c353044ef5e29631279e0afc1a8c3",
"assets/packages/country_code_picker/flags/co.png": "e2fa18bb920565594a0e62427540163c",
"assets/packages/country_code_picker/flags/cr.png": "475b2d72352df176b722da898490afa2",
"assets/packages/country_code_picker/flags/cu.png": "8d4a05799ef3d6bbe07b241dd4398114",
"assets/packages/country_code_picker/flags/cv.png": "60d75c9d0e0cd186bb1b70375c797a0c",
"assets/packages/country_code_picker/flags/cw.png": "db36ed08bfafe9c5d0d02332597676ca",
"assets/packages/country_code_picker/flags/cx.png": "65421207e2eb319ba84617290bf24082",
"assets/packages/country_code_picker/flags/cy.png": "9a3518f15815fa1705f1d7ca18907748",
"assets/packages/country_code_picker/flags/cz.png": "482c8ba16ff3d81eeef60650db3802e4",
"assets/packages/country_code_picker/flags/de.png": "6f94b174f4a02f3292a521d992ed5193",
"assets/packages/country_code_picker/flags/dj.png": "dc144d9502e4edb3e392d67965f7583e",
"assets/packages/country_code_picker/flags/dk.png": "f9d6bcded318f5910b8bc49962730afa",
"assets/packages/country_code_picker/flags/dm.png": "b7ab53eeee4303e193ea1603f33b9c54",
"assets/packages/country_code_picker/flags/do.png": "a05514a849c002b2a30f420070eb0bbb",
"assets/packages/country_code_picker/flags/dz.png": "93afdc9291f99de3dd88b29be3873a20",
"assets/packages/country_code_picker/flags/ec.png": "cbaf1d60bbcde904a669030e1c883f3e",
"assets/packages/country_code_picker/flags/ee.png": "54aa1816507276a17070f395a4a89e2e",
"assets/packages/country_code_picker/flags/eg.png": "9e371179452499f2ba7b3c5ff47bec69",
"assets/packages/country_code_picker/flags/eh.png": "f781a34a88fa0adf175e3aad358575ed",
"assets/packages/country_code_picker/flags/er.png": "08a95adef16cb9174f183f8d7ac1102b",
"assets/packages/country_code_picker/flags/es.png": "e180e29212048d64951449cc80631440",
"assets/packages/country_code_picker/flags/et.png": "2c5eec0cda6655b5228fe0e9db763a8e",
"assets/packages/country_code_picker/flags/eu.png": "b32e3d089331f019b61399a1df5a763a",
"assets/packages/country_code_picker/flags/fi.png": "a79f2dbc126dac46e4396fcc80942a82",
"assets/packages/country_code_picker/flags/fj.png": "6030dc579525663142e3e8e04db80154",
"assets/packages/country_code_picker/flags/fk.png": "0e9d14f59e2e858cd0e89bdaec88c2c6",
"assets/packages/country_code_picker/flags/fm.png": "d4dffd237271ddd37f3bbde780a263bb",
"assets/packages/country_code_picker/flags/fo.png": "0bfc387f2eb3d9b85225d61b515ee8fc",
"assets/packages/country_code_picker/flags/fr.png": "79cbece941f09f9a9a46d42cabd523b1",
"assets/packages/country_code_picker/flags/ga.png": "fa05207326e695b552e0a885164ee5ac",
"assets/packages/country_code_picker/flags/gb-eng.png": "0b05e615c5a3feee707a4d72009cd767",
"assets/packages/country_code_picker/flags/gb-nir.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/gb-sct.png": "075bb357733327ec4115ab5cbba792ac",
"assets/packages/country_code_picker/flags/gb-wls.png": "72005cb7be41ac749368a50a9d9f29ee",
"assets/packages/country_code_picker/flags/gb.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/gd.png": "42ad178232488665870457dd53e2b037",
"assets/packages/country_code_picker/flags/ge.png": "93d6c82e9dc8440b706589d086be2c1c",
"assets/packages/country_code_picker/flags/gf.png": "71678ea3b4a8eeabd1e64a60eece4256",
"assets/packages/country_code_picker/flags/gg.png": "cdb11f97802d458cfa686f33459f0d4b",
"assets/packages/country_code_picker/flags/gh.png": "c73432df8a63fb674f93e8424eae545f",
"assets/packages/country_code_picker/flags/gi.png": "58894db0e25e9214ec2271d96d4d1623",
"assets/packages/country_code_picker/flags/gl.png": "d09f355715f608263cf0ceecd3c910ed",
"assets/packages/country_code_picker/flags/gm.png": "c670404188a37f5d347d03947f02e4d7",
"assets/packages/country_code_picker/flags/gn.png": "765a0434cb071ad4090a8ea06797a699",
"assets/packages/country_code_picker/flags/gp.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/gq.png": "0dc3ca0cda7dfca81244e1571a4c466c",
"assets/packages/country_code_picker/flags/gr.png": "86aeb970a79aa561187fa8162aee2938",
"assets/packages/country_code_picker/flags/gs.png": "524d0f00ee874af0cdf3c00f49fa17ae",
"assets/packages/country_code_picker/flags/gt.png": "df7a020c2f611bdcb3fa8cd2f581b12f",
"assets/packages/country_code_picker/flags/gu.png": "babddec7750bad459ca1289d7ac7fc6a",
"assets/packages/country_code_picker/flags/gw.png": "25bc1b5542dadf2992b025695baf056c",
"assets/packages/country_code_picker/flags/gy.png": "75f8dd61ddedb3cf595075e64fc80432",
"assets/packages/country_code_picker/flags/hk.png": "51df04cf3db3aefd1778761c25a697dd",
"assets/packages/country_code_picker/flags/hm.png": "600835121397ea512cea1f3204278329",
"assets/packages/country_code_picker/flags/hn.png": "09ca9da67a9c84f4fc25f96746162f3c",
"assets/packages/country_code_picker/flags/hr.png": "04cfd167b9564faae3b2dd3ef13a0794",
"assets/packages/country_code_picker/flags/ht.png": "009d5c3627c89310bd25522b636b09bf",
"assets/packages/country_code_picker/flags/hu.png": "66c22db579470694c7928598f6643cc6",
"assets/packages/country_code_picker/flags/id.png": "78d94c7d31fed988e9b92279895d8b05",
"assets/packages/country_code_picker/flags/ie.png": "5790c74e53070646cd8a06eec43e25d6",
"assets/packages/country_code_picker/flags/il.png": "b72b572cc199bf03eba1c008cd00d3cb",
"assets/packages/country_code_picker/flags/im.png": "17ddc1376b22998731ccc5295ba9db1c",
"assets/packages/country_code_picker/flags/in.png": "be8bf440db707c1cc2ff9dd0328414e5",
"assets/packages/country_code_picker/flags/io.png": "8021829259b5030e95f45902d30f137c",
"assets/packages/country_code_picker/flags/iq.png": "dc9f3e8ab93b20c33f4a4852c162dc1e",
"assets/packages/country_code_picker/flags/ir.png": "df9b6d2134d1c5d4d3e676d9857eb675",
"assets/packages/country_code_picker/flags/is.png": "22358dadd1d5fc4f11fcb3c41d453ec0",
"assets/packages/country_code_picker/flags/it.png": "99f67d3c919c7338627d922f552c8794",
"assets/packages/country_code_picker/flags/je.png": "8d6482f71bd0728025134398fc7c6e58",
"assets/packages/country_code_picker/flags/jm.png": "3537217c5eeb048198415d398e0fa19e",
"assets/packages/country_code_picker/flags/jo.png": "d5bfa96801b7ed670ad1be55a7bd94ed",
"assets/packages/country_code_picker/flags/jp.png": "b7a724413be9c2b001112c665d764385",
"assets/packages/country_code_picker/flags/ke.png": "034164976de81ef96f47cfc6f708dde6",
"assets/packages/country_code_picker/flags/kg.png": "a9b6a1b8fe03b8b617f30a28a1d61c12",
"assets/packages/country_code_picker/flags/kh.png": "cd50a67c3b8058585b19a915e3635107",
"assets/packages/country_code_picker/flags/ki.png": "69a7d5a8f6f622e6d2243f3f04d1d4c0",
"assets/packages/country_code_picker/flags/km.png": "204a44c4c89449415168f8f77c4c0d31",
"assets/packages/country_code_picker/flags/kn.png": "65d2fc69949162f1bc14eb9f2da5ecbc",
"assets/packages/country_code_picker/flags/kp.png": "fd6e44b3fe460988afbfd0cb456282b2",
"assets/packages/country_code_picker/flags/kr.png": "9e2a9c7ae07cf8977e8f01200ee2912e",
"assets/packages/country_code_picker/flags/kw.png": "b2afbb748e0b7c0b0c22f53e11e7dd55",
"assets/packages/country_code_picker/flags/ky.png": "666d01aa03ecdf6b96202cdf6b08b732",
"assets/packages/country_code_picker/flags/kz.png": "cfce5cd7842ef8091b7c25b23c3bb069",
"assets/packages/country_code_picker/flags/la.png": "8c88d02c3824eea33af66723d41bb144",
"assets/packages/country_code_picker/flags/lb.png": "b21c8d6f5dd33761983c073f217a0c4f",
"assets/packages/country_code_picker/flags/lc.png": "055c35de209c63b67707c5297ac5079a",
"assets/packages/country_code_picker/flags/li.png": "3cf7e27712e36f277ca79120c447e5d1",
"assets/packages/country_code_picker/flags/lk.png": "56412c68b1d952486f2da6c1318adaf2",
"assets/packages/country_code_picker/flags/lr.png": "1c159507670497f25537ad6f6d64f88d",
"assets/packages/country_code_picker/flags/ls.png": "f2d4025bf560580ab141810a83249df0",
"assets/packages/country_code_picker/flags/lt.png": "e38382f3f7cb60cdccbf381cea594d2d",
"assets/packages/country_code_picker/flags/lu.png": "4cc30d7a4c3c3b98f55824487137680d",
"assets/packages/country_code_picker/flags/lv.png": "6a86b0357df4c815f1dc21e0628aeb5f",
"assets/packages/country_code_picker/flags/ly.png": "777f861e476f1426bf6663fa283243e5",
"assets/packages/country_code_picker/flags/ma.png": "dd5dc19e011755a7610c1e7ccd8abdae",
"assets/packages/country_code_picker/flags/mc.png": "412ce0b1f821e3912e83ae356b30052e",
"assets/packages/country_code_picker/flags/md.png": "7b273f5526b88ed0d632fd0fd8be63be",
"assets/packages/country_code_picker/flags/me.png": "74434a1447106cc4fb7556c76349c3da",
"assets/packages/country_code_picker/flags/mf.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/mg.png": "a562a819338427e57c57744bb92b1ef1",
"assets/packages/country_code_picker/flags/mh.png": "2a7c77b8b1b4242c6aa8539babe127a7",
"assets/packages/country_code_picker/flags/mk.png": "8b17ec36efa149749b8d3fd59f55974b",
"assets/packages/country_code_picker/flags/ml.png": "1a3a39e5c9f2fdccfb6189a117d04f72",
"assets/packages/country_code_picker/flags/mm.png": "b664dc1c591c3bf34ad4fd223922a439",
"assets/packages/country_code_picker/flags/mn.png": "02af8519f83d06a69068c4c0f6463c8a",
"assets/packages/country_code_picker/flags/mo.png": "da3700f98c1fe1739505297d1efb9e12",
"assets/packages/country_code_picker/flags/mp.png": "60b14b06d1ce23761767b73d54ef613a",
"assets/packages/country_code_picker/flags/mq.png": "446edd9300307eda562e5c9ac307d7f2",
"assets/packages/country_code_picker/flags/mr.png": "733d747ba4ec8cf120d5ebc0852de34a",
"assets/packages/country_code_picker/flags/ms.png": "32daa6ee99335b73cb3c7519cfd14a61",
"assets/packages/country_code_picker/flags/mt.png": "808538b29f6b248469a184bbf787a97f",
"assets/packages/country_code_picker/flags/mu.png": "aec293ef26a9df356ea2f034927b0a74",
"assets/packages/country_code_picker/flags/mv.png": "69843b1ad17352372e70588b9c37c7cc",
"assets/packages/country_code_picker/flags/mw.png": "efc0c58b76be4bf1c3efda589b838132",
"assets/packages/country_code_picker/flags/mx.png": "b69db8e7f14b18ddd0e3769f28137552",
"assets/packages/country_code_picker/flags/my.png": "7b4bc8cdef4f7b237791c01f5e7874f4",
"assets/packages/country_code_picker/flags/mz.png": "40a78c6fa368aed11b3d483cdd6973a5",
"assets/packages/country_code_picker/flags/na.png": "3499146c4205c019196f8a0f7a7aa156",
"assets/packages/country_code_picker/flags/nc.png": "a3ee8fc05db66f7ce64bce533441da7f",
"assets/packages/country_code_picker/flags/ne.png": "a152defcfb049fa960c29098c08e3cd3",
"assets/packages/country_code_picker/flags/nf.png": "9a4a607db5bc122ff071cbfe58040cf7",
"assets/packages/country_code_picker/flags/ng.png": "15b7ad41c03c87b9f30c19d37f457817",
"assets/packages/country_code_picker/flags/ni.png": "6985ed1381cb33a5390258795f72e95a",
"assets/packages/country_code_picker/flags/nl.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/country_code_picker/flags/no.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/np.png": "35e3d64e59650e1f1cf909f5c6d85176",
"assets/packages/country_code_picker/flags/nr.png": "f5ae3c51dfacfd6719202b4b24e20131",
"assets/packages/country_code_picker/flags/nu.png": "c8bb4da14b8ffb703036b1bae542616d",
"assets/packages/country_code_picker/flags/nz.png": "b48a5e047a5868e59c2abcbd8387082d",
"assets/packages/country_code_picker/flags/om.png": "79a867771bd9447d372d5df5ec966b36",
"assets/packages/country_code_picker/flags/pa.png": "49d53d64564555ea5976c20ea9365ea6",
"assets/packages/country_code_picker/flags/pe.png": "724d3525f205dfc8705bb6e66dd5bdff",
"assets/packages/country_code_picker/flags/pf.png": "3ba7f48f96a7189f9511a7f77ea0a7a4",
"assets/packages/country_code_picker/flags/pg.png": "06961c2b216061b0e40cb4221abc2bff",
"assets/packages/country_code_picker/flags/ph.png": "de75e3931c41ae8b9cae8823a9500ca7",
"assets/packages/country_code_picker/flags/pk.png": "0228ceefa355b34e8ec3be8bfd1ddb42",
"assets/packages/country_code_picker/flags/pl.png": "a7b46e3dcd5571d40c3fa8b62b1f334a",
"assets/packages/country_code_picker/flags/pm.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/pn.png": "ffa91e8a1df1eac6b36d737aa76d701b",
"assets/packages/country_code_picker/flags/pr.png": "ac1c4bcef3da2034e1668ab1e95ae82d",
"assets/packages/country_code_picker/flags/ps.png": "b6e1bd808cf8e5e3cd2b23e9cf98d12e",
"assets/packages/country_code_picker/flags/pt.png": "b4cf39fbafb4930dec94f416e71fc232",
"assets/packages/country_code_picker/flags/pw.png": "92ec1edf965de757bc3cca816f4cebbd",
"assets/packages/country_code_picker/flags/py.png": "6bb880f2dd24622093ac59d4959ae70d",
"assets/packages/country_code_picker/flags/qa.png": "b95e814a13e5960e28042347cec5bc0d",
"assets/packages/country_code_picker/flags/re.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/ro.png": "1ee3ca39dbe79f78d7fa903e65161fdb",
"assets/packages/country_code_picker/flags/rs.png": "ee9ae3b80531d6d0352a39a56c5130c0",
"assets/packages/country_code_picker/flags/ru.png": "9a3b50fcf2f7ae2c33aa48b91ab6cd85",
"assets/packages/country_code_picker/flags/rw.png": "6ef05d29d0cded56482b1ad17f49e186",
"assets/packages/country_code_picker/flags/sa.png": "ef836bd02f745af03aa0d01003942d44",
"assets/packages/country_code_picker/flags/sb.png": "e3a6704b7ba2621480d7074a6e359b03",
"assets/packages/country_code_picker/flags/sc.png": "52f9bd111531041468c89ce9da951026",
"assets/packages/country_code_picker/flags/sd.png": "93e252f26bead630c0a0870de5a88f14",
"assets/packages/country_code_picker/flags/se.png": "24d2bed25b5aad316134039c2903ac59",
"assets/packages/country_code_picker/flags/sg.png": "94ea82acf1aa0ea96f58c6b0cd1ed452",
"assets/packages/country_code_picker/flags/sh.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/si.png": "922d047a95387277f84fdc246f0a8d11",
"assets/packages/country_code_picker/flags/sj.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/sk.png": "0f8da623c8f140ac2b5a61234dd3e7cd",
"assets/packages/country_code_picker/flags/sl.png": "a7785c2c81149afab11a5fa86ee0edae",
"assets/packages/country_code_picker/flags/sm.png": "b41d5b7eb3679c2e477fbd25f5ee9e7d",
"assets/packages/country_code_picker/flags/sn.png": "25201e1833a1b642c66c52a09b43f71e",
"assets/packages/country_code_picker/flags/so.png": "cfe6bb95bcd259a3cc41a09ee7ca568b",
"assets/packages/country_code_picker/flags/sr.png": "e5719b1a8ded4e5230f6bac3efc74a90",
"assets/packages/country_code_picker/flags/ss.png": "f1c99aded110fc8a0bc85cd6c63895fb",
"assets/packages/country_code_picker/flags/st.png": "7a28a4f0333bf4fb4f34b68e65c04637",
"assets/packages/country_code_picker/flags/sv.png": "994c8315ced2a4d8c728010447371ea1",
"assets/packages/country_code_picker/flags/sx.png": "8fce7986b531ff8936540ad1155a5df5",
"assets/packages/country_code_picker/flags/sy.png": "2e33ad23bffc935e4a06128bc5519a2b",
"assets/packages/country_code_picker/flags/sz.png": "5e45a755ac4b33df811f0fb76585270e",
"assets/packages/country_code_picker/flags/tc.png": "6f2d1a2b9f887be4b3568169e297a506",
"assets/packages/country_code_picker/flags/td.png": "51b129223db46adc71f9df00c93c2868",
"assets/packages/country_code_picker/flags/tf.png": "dc3f8c0d9127aa82cbd45b8861a67bf5",
"assets/packages/country_code_picker/flags/tg.png": "82dabd3a1a4900ae4866a4da65f373e5",
"assets/packages/country_code_picker/flags/th.png": "d4bd67d33ed4ac74b4e9b75d853dae02",
"assets/packages/country_code_picker/flags/tj.png": "2407ba3e581ffd6c2c6b28e9692f9e39",
"assets/packages/country_code_picker/flags/tk.png": "87e390b384b39af41afd489e42b03e07",
"assets/packages/country_code_picker/flags/tl.png": "b3475faa9840f875e5ec38b0e6a6c170",
"assets/packages/country_code_picker/flags/tm.png": "3fe5e44793aad4e8997c175bc72fda06",
"assets/packages/country_code_picker/flags/tn.png": "87f591537e0a5f01bb10fe941798d4e4",
"assets/packages/country_code_picker/flags/to.png": "a93fdd2ace7777e70528936a135f1610",
"assets/packages/country_code_picker/flags/tr.png": "0100620dedad6034185d0d53f80287bd",
"assets/packages/country_code_picker/flags/tt.png": "716fa6f4728a25ffccaf3770f5f05f7b",
"assets/packages/country_code_picker/flags/tv.png": "493c543f07de75f222d8a76506c57989",
"assets/packages/country_code_picker/flags/tw.png": "94322a94d308c89d1bc7146e05f1d3e5",
"assets/packages/country_code_picker/flags/tz.png": "389451347d28584d88b199f0cbe0116b",
"assets/packages/country_code_picker/flags/ua.png": "dbd97cfa852ffc84bfdf98bc2a2c3789",
"assets/packages/country_code_picker/flags/ug.png": "6ae26af3162e5e3408cb5c5e1c968047",
"assets/packages/country_code_picker/flags/um.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/country_code_picker/flags/us.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/country_code_picker/flags/uy.png": "20c63ac48df3e394fa242d430276a988",
"assets/packages/country_code_picker/flags/uz.png": "d3713ea19c37aaf94975c3354edd7bb7",
"assets/packages/country_code_picker/flags/va.png": "cfbf48f8fcaded75f186d10e9d1408fd",
"assets/packages/country_code_picker/flags/vc.png": "a604d5acd8c7be6a2bbaa1759ac2949d",
"assets/packages/country_code_picker/flags/ve.png": "f5dabf05e3a70b4eeffa5dad32d10a67",
"assets/packages/country_code_picker/flags/vg.png": "0f19ce4f3c92b0917902cb316be492ba",
"assets/packages/country_code_picker/flags/vi.png": "944281795d5daf17a273f394e51b8b79",
"assets/packages/country_code_picker/flags/vn.png": "7c8f8457485f14482dcab4042e432e87",
"assets/packages/country_code_picker/flags/vu.png": "1bed31828f3b7e0ff260f61ab45396ad",
"assets/packages/country_code_picker/flags/wf.png": "4d33c71f87a33e47a0e466191c4eb3db",
"assets/packages/country_code_picker/flags/ws.png": "8cef2c9761d3c8107145d038bf1417ea",
"assets/packages/country_code_picker/flags/xk.png": "b75ba9ad218b109fca4ef1f3030936f1",
"assets/packages/country_code_picker/flags/ye.png": "1d5dcbcbbc8de944c3db228f0c089569",
"assets/packages/country_code_picker/flags/yt.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/za.png": "aa749828e6cf1a3393e0d5c9ab088af0",
"assets/packages/country_code_picker/flags/zm.png": "29b67848f5e3864213c84ccf108108ea",
"assets/packages/country_code_picker/flags/zw.png": "d5c4fe9318ebc1a68e3445617215195f",
"assets/packages/country_code_picker/src/i18n/af.json": "56c2bccb2affb253d9f275496b594453",
"assets/packages/country_code_picker/src/i18n/am.json": "d32ed11596bd0714c9fce1f1bfc3f16e",
"assets/packages/country_code_picker/src/i18n/ar.json": "fcc06d7c93de78066b89f0030cdc5fe3",
"assets/packages/country_code_picker/src/i18n/az.json": "430fd5cb15ab8126b9870261225c4032",
"assets/packages/country_code_picker/src/i18n/be.json": "b3ded71bde8fbbdac0bf9c53b3f66fff",
"assets/packages/country_code_picker/src/i18n/bg.json": "fc2f396a23bf35047919002a68cc544c",
"assets/packages/country_code_picker/src/i18n/bn.json": "1d49af56e39dea0cf602c0c22046d24c",
"assets/packages/country_code_picker/src/i18n/bs.json": "8fa362bc16f28b5ca0e05e82536d9bd9",
"assets/packages/country_code_picker/src/i18n/ca.json": "cdf37aa8bb59b485e9b566bff8523059",
"assets/packages/country_code_picker/src/i18n/cs.json": "7cb74ecb8d6696ba6f333ae1cfae59eb",
"assets/packages/country_code_picker/src/i18n/da.json": "bb4a77f6bfaf82e4ed0b57ec41e289aa",
"assets/packages/country_code_picker/src/i18n/de.json": "a56eb56282590b138102ff72d64420f4",
"assets/packages/country_code_picker/src/i18n/el.json": "e4da1a5d8ab9c6418036307d54a9aa16",
"assets/packages/country_code_picker/src/i18n/en.json": "759bf8bef6af283a25d7a2204bdf3d78",
"assets/packages/country_code_picker/src/i18n/es.json": "c9f37c216b3cead47636b86c1b383d20",
"assets/packages/country_code_picker/src/i18n/et.json": "a5d4f54704d2cdabb368760399d3cae5",
"assets/packages/country_code_picker/src/i18n/fa.json": "baefec44af8cd45714204adbc6be15cb",
"assets/packages/country_code_picker/src/i18n/fi.json": "3ad6c7d3efbb4b1041d087a0ef4a70b9",
"assets/packages/country_code_picker/src/i18n/fr.json": "b9be4d0a12f9d7c3b8fcf6ce41facd0b",
"assets/packages/country_code_picker/src/i18n/gl.json": "14e84ea53fe4e3cef19ee3ad2dff3967",
"assets/packages/country_code_picker/src/i18n/ha.json": "4d0c8114bf4e4fd1e68d71ff3af6528f",
"assets/packages/country_code_picker/src/i18n/he.json": "6f7a03d60b73a8c5f574188370859d12",
"assets/packages/country_code_picker/src/i18n/hi.json": "3dac80dc00dc7c73c498a1de439840b4",
"assets/packages/country_code_picker/src/i18n/hr.json": "e7a48f3455a0d27c0fa55fa9cbf02095",
"assets/packages/country_code_picker/src/i18n/hu.json": "3cd9c2280221102780d44b3565db7784",
"assets/packages/country_code_picker/src/i18n/hy.json": "1e2f6d1808d039d7db0e7e335f1a7c77",
"assets/packages/country_code_picker/src/i18n/id.json": "e472d1d00471f86800572e85c3f3d447",
"assets/packages/country_code_picker/src/i18n/is.json": "6cf088d727cd0db23f935be9f20456bb",
"assets/packages/country_code_picker/src/i18n/it.json": "c1f0d5c4e81605566fcb7f399d800768",
"assets/packages/country_code_picker/src/i18n/ja.json": "3f709dc6a477636eff4bfde1bd2d55e1",
"assets/packages/country_code_picker/src/i18n/ka.json": "23c8b2028efe71dab58f3cee32eada43",
"assets/packages/country_code_picker/src/i18n/kk.json": "bca3f77a658313bbe950fbc9be504fac",
"assets/packages/country_code_picker/src/i18n/km.json": "19fedcf05e4fd3dd117d24e24b498937",
"assets/packages/country_code_picker/src/i18n/ko.json": "76484ad0eb25412d4c9be010bca5baf0",
"assets/packages/country_code_picker/src/i18n/ku.json": "4c743e7dd3d124cb83602d20205d887c",
"assets/packages/country_code_picker/src/i18n/ky.json": "51dff3d9ff6de3775bc0ffeefe6d36cb",
"assets/packages/country_code_picker/src/i18n/lt.json": "21cacbfa0a4988d180feb3f6a2326660",
"assets/packages/country_code_picker/src/i18n/lv.json": "1c83c9664e00dce79faeeec714729a26",
"assets/packages/country_code_picker/src/i18n/mk.json": "899e90341af48b31ffc8454325b454b2",
"assets/packages/country_code_picker/src/i18n/ml.json": "096da4f99b9bd77d3fe81dfdc52f279f",
"assets/packages/country_code_picker/src/i18n/mn.json": "6f69ca7a6a08753da82cb8437f39e9a9",
"assets/packages/country_code_picker/src/i18n/ms.json": "826babac24d0d842981eb4d5b2249ad6",
"assets/packages/country_code_picker/src/i18n/nb.json": "c0f89428782cd8f5ab172621a00be3d0",
"assets/packages/country_code_picker/src/i18n/nl.json": "20d4bf89d3aa323f7eb448a501f487e1",
"assets/packages/country_code_picker/src/i18n/nn.json": "129e66510d6bcb8b24b2974719e9f395",
"assets/packages/country_code_picker/src/i18n/no.json": "7a5ef724172bd1d2515ac5d7b0a87366",
"assets/packages/country_code_picker/src/i18n/pl.json": "78cbb04b3c9e7d27b846ee6a5a82a77b",
"assets/packages/country_code_picker/src/i18n/ps.json": "ab8348fd97d6ceddc4a509e330433caa",
"assets/packages/country_code_picker/src/i18n/pt.json": "bd7829884fd97de8243cba4257ab79b2",
"assets/packages/country_code_picker/src/i18n/ro.json": "c38a38f06203156fbd31de4daa4f710a",
"assets/packages/country_code_picker/src/i18n/ru.json": "aaf6b2672ef507944e74296ea719f3b2",
"assets/packages/country_code_picker/src/i18n/sd.json": "281e13e4ec4df824094e1e64f2d185a7",
"assets/packages/country_code_picker/src/i18n/sk.json": "3c52ed27adaaf54602fba85158686d5a",
"assets/packages/country_code_picker/src/i18n/sl.json": "4a88461ce43941d4a52594a65414e98f",
"assets/packages/country_code_picker/src/i18n/so.json": "09e1f045e22b85a7f54dd2edc446b0e8",
"assets/packages/country_code_picker/src/i18n/sq.json": "0aa6432ab040153355d88895aa48a72f",
"assets/packages/country_code_picker/src/i18n/sr.json": "69a10a0b63edb61e01bc1ba7ba6822e4",
"assets/packages/country_code_picker/src/i18n/sv.json": "7a6a6a8a91ca86bb0b9e7f276d505896",
"assets/packages/country_code_picker/src/i18n/ta.json": "48b6617bde902cf72e0ff1731fadfd07",
"assets/packages/country_code_picker/src/i18n/tg.json": "5512d16cb77eb6ba335c60b16a22578b",
"assets/packages/country_code_picker/src/i18n/th.json": "721b2e8e586eb7c7da63a18b5aa3a810",
"assets/packages/country_code_picker/src/i18n/tr.json": "d682217c3ccdd9cc270596fe1af7a182",
"assets/packages/country_code_picker/src/i18n/tt.json": "e3687dceb189c2f6600137308a11b22f",
"assets/packages/country_code_picker/src/i18n/ug.json": "e2be27143deb176fa325ab9b229d8fd8",
"assets/packages/country_code_picker/src/i18n/uk.json": "a7069f447eb0060aa387a649e062c895",
"assets/packages/country_code_picker/src/i18n/ur.json": "b5bc6921e006ae9292ed09e0eb902716",
"assets/packages/country_code_picker/src/i18n/uz.json": "00e22e3eb3a7198f0218780f2b04369c",
"assets/packages/country_code_picker/src/i18n/vi.json": "fa3d9a3c9c0d0a20d0bd5e6ac1e97835",
"assets/packages/country_code_picker/src/i18n/zh.json": "44a9040959b2049350bbff0696b84d45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e72482689f9e7d9863a80a2fa5fc436d",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5a3adf129e2c937ce33e29f42fa553bb",
"firebase-messaging-sw.js": "2b3720b78340304ddde9769793d2b42d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "030abcfcdad5936be5c450dc4830d827",
"index.html": "423e303fd7448aa076de43f2f32f5222",
"/": "423e303fd7448aa076de43f2f32f5222",
"logo.png": "5a3adf129e2c937ce33e29f42fa553bb",
"main.dart.js": "65eb0f0657cb704395e3de3771663b0b",
"manifest.json": "75a4d2cb6e4cc0d05a75a703d79e97fd",
"style.css": "74604f358cd636303964e9800259dee2",
"version.json": "c752ec318aa6ef610a2484d88c9a5209"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
