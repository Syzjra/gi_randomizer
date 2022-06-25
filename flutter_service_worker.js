'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "b2c26016fa27d0b3ecbbad7586b40a8b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0f5d77316d33a58fe70506a22bd62dac",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0f97c8386c83cfd7e19c887639fee39f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1a5338d4c2154f6387dd4da10adeee2f",
".git/logs/refs/heads/main": "f731b73b2ba50bf6e6d516f31f4c29e5",
".git/logs/refs/remotes/origin/main": "c5219471ed30d319488fed334b0d137b",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/08/0be2473918af62909040b1b1c608ac2752edb3": "1c9a450f51dc7725a529a72794cd335b",
".git/objects/0b/3d4165ccb1eae3b1bf0bd08da20e18549b8d9f": "bb3bf4b76cd62bb216e1a00634204aa6",
".git/objects/0c/61884e007a689f3385a061775b761b152423cc": "d39c218f226351a0970f51d8992ed819",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/811d03a3c41241eecfee8f8d7031fab849a967": "2e280dc6e5ddfb99bd415a03708dae7b",
".git/objects/0e/c90538ad157b26f71e02bda676568ed981f4b7": "e0caf23b9c61469b212cf4fa9cca668d",
".git/objects/14/6dce8594fb949bf4b63ed6954750d33b144576": "5935d70eb394d2f727ac15e61b9c7a3f",
".git/objects/15/e5d67cd77921200abe3391abd335b7a0e53897": "e1fce22636d1679fc6f9aef52839106e",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/1f/87339c9375a668316383f743ebc544ec2f26c7": "ddb0be0e520c95c6572d2af2830125aa",
".git/objects/21/7adb9f43a88f9eff0443befc781ba7b88bb6b7": "35e287a6ba867a40f80ceec45d560f2e",
".git/objects/24/a278e132c470522324f6b71fbd2f5b8928a7b2": "26a9e6bcfdbd0d6bb8018604c0301a82",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/d0ce42b4005b0ef58edf614c3de896b7a297cc": "c10ae4724f73c7cc0764f76d41486349",
".git/objects/26/30db5bc3f80f014aef47a3299d65395220444c": "8649d2db0fe2afa8a54fd540c4b9ce98",
".git/objects/28/a97d10b59de04a5c2107f42c5d282361a950fe": "3139ba221b2c98fd485ec9f1e53b9dfd",
".git/objects/2a/1dbeb83c01c7c4b0f52c7d51fbaf501900871d": "22461f6adab243bfed53b74db951a431",
".git/objects/2c/4f903ff5c9eec76cafbe2c6fb42c0f8c79ca99": "361a34cea64215e37b47b03067b95e15",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/47f04824ca91b5811c4b4a3802472f10d49c75": "50f273bfd37db653de5d948e7d6bdf7f",
".git/objects/2f/a7b568ff73b998eb665ef2b0c04eb245a55025": "08264206efc6b6b972a639fcc3fc7f7e",
".git/objects/30/404eda79b9c7e8377e9ab03ddf82b5dde06565": "83d543626db908809bffcd1d0f100724",
".git/objects/30/85c52944210c51a837ff12421bf985a022818c": "7e777c9b1f51717d041aebc23d0d3f66",
".git/objects/30/9fff0e2ec9878957ecc58e1ddc228bc3fb891e": "e408ee666390fe2eab03a655437f39ce",
".git/objects/34/0eb01d74ec37f5b3d55bab067c59e21a1da8b0": "4963bd17783845246326ac7795422629",
".git/objects/34/152cff905a43d5a4e526b2b0d17b67697050f1": "c9f44ce8d941709ee2369494bb8aeae1",
".git/objects/34/e18b9ed9c47e268fad8cd09106d85636a1cd36": "42b565a1f1225b103aacd343691f1cca",
".git/objects/36/4d7ee1524941f49993c2f9f18ec9f49e7982eb": "a7789494faf9b8ef9a6a5f765da261a0",
".git/objects/38/dcf41d2fe2fb28b251c35c68f804c11a5ae0cf": "055e3fc9135cfb85eb5f4fe2720805e6",
".git/objects/42/b6324a9f1e1c91fcfacbb08fdfef52bb67e000": "24b8bc95677b5188d5ad70091b112b4d",
".git/objects/45/17261479a6de163104f9bb10fef88bdb42b637": "27601702a9669ff883036a876e68b11e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bc785fa39a173d522ea0a0d60015d440e3092d": "484bb02275c2c17862f9d3355d83d753",
".git/objects/47/38f95c58ce9164e0308d5f9a3def0f8375e318": "ef9d34cfd9bb51e9ca05922bf67d868e",
".git/objects/49/7bfafb70f1681270ab1f9523d682eeae6fe84c": "49540b68846758c759bd890703fe2178",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/54/0b0706a287603f9d386613d93339527cd7cdc3": "90f4b699af631b4150e8228c3c40b636",
".git/objects/55/596ea689b07e40b028c077e1b7ef0459eb004f": "e2b7a80f0ff555a201c1c8ca96f975b1",
".git/objects/55/972b396104debcfdb535708dc08d97c3a4c656": "556ce02ee176c877b4c16a5a7432d5c0",
".git/objects/5b/856ecb3c514467358c763b92fb6fcab25783ab": "bdc793fd7fcbbd81b6d53bc7fcf9e415",
".git/objects/5d/75980b99239ae8a2c1374c7dbb95d903ad19a5": "280c26161b7e540f2417c918e58d4881",
".git/objects/60/968b05409e790bf74fa089e4e6c961a7db8e37": "d3e2e5396e5e0cd5c8eb2e4023505c44",
".git/objects/63/a3eb0d9faee4eb865c7fab505a34fde0694171": "2776b87508a26b5686c301ffac7aed89",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/68/216812c3b4709b8fcdda6abaf7a75a948fdba9": "6e0db086888a7413cf1ae13021f7c5fd",
".git/objects/69/776adf838d5000be2aac39622a65b48e079e1e": "4fcfe19f9ce61aa0be54ff4d59d9a539",
".git/objects/6a/2328731a7636323fb2ea297b2bb9a1404edea0": "249d9d63e92fe0f7d76494113118e8b6",
".git/objects/6b/281dea4dcc8b69f108ccef022f9c31f50057a6": "5e68e7887ee32798a96dd07156f3bbec",
".git/objects/71/b79ba1735acecfe1579381c0edc3f0143a18e2": "1d508dfc8ea5dd17e726c2ed028470dc",
".git/objects/72/d7fb583903db53a6658df18681fa07269b6ed1": "54fb18b4d09bc2bf02c45ac37a552e41",
".git/objects/74/3b58375bc64d34fbd170f8fb892a31d6c1bf70": "f0ca8f9edb395097fffccd04e67674b6",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/30a670445bb08f269121a6a10f1d79f77ff463": "7ef5cbbec6d8595cd4548162e30a69b9",
".git/objects/80/7954714cb3069fa7e5cee0c285baaed187fcac": "c3706485c84c03636ac216ce09b6eee6",
".git/objects/81/122abcd1ec6b44bdf92df9fbf8476fb4c429ab": "4266d533ffcd54fc238b2619f6d2131f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/67e815b5e7a6eea896f1e8ad584258519b1947": "065881a248df1fb8e24dba8e78a0858e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e81372c78b546468cabbd694fe326212d587ee": "805d29f86a6b183520fda01b89dcf348",
".git/objects/8c/37cb6c140b5d749d5fcd2d99d2c77d8971fddf": "b2c2ba0aadd9adf2d1584a67bf238506",
".git/objects/8c/aab169c6df49cf3a88dec7a39cb82590e1f478": "a4a36148246e7d291c7630ed2c540f21",
".git/objects/8d/2349b64d471612e4fac7e58f24b06808893f41": "8e588c2ebd8654899c2f2186c13b1db2",
".git/objects/90/39ffc28c5a129522c115bedac00afb40bf7abe": "8f09f64b43ec74018999df3f689198ff",
".git/objects/97/4fe5e0fd56352d8cf207413c03d466e7bc167d": "21c31e8b7d9416c7709ceff30fdc4a57",
".git/objects/98/2907211c29bbd8361c72d03d87344f78f34398": "f601c8865565285941f17acc2259e900",
".git/objects/9e/fae7a07be8c5f92b9a5b8ca8477e4d61472305": "a5dcd404c9446888fbb259507deef274",
".git/objects/9e/fd8268f7b6ab09569fa9e9306f278bea06a2e2": "ab9299b83b29831cd864464cb164cadb",
".git/objects/9f/0e8cfe9c2282b4d6e3502ae26152f1a7f5aaab": "ea5a97874674cda0584e4ad4cf239f2d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/f5f2f1e7436db8e06eba6887cd2dae3faf1884": "255bf82f4a7b543bef4936c2d2443126",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/825c7604d12e9580360eff110010574d6b915a": "30f7ebb9819aaa1da8075e3b71a48fe9",
".git/objects/bb/e97f42a7604105547aa9dd569f3ff0b04f0166": "7dfa9bddc02149d50d142be25e1909b7",
".git/objects/c2/e71ab90ba2e41691077a739278725e8b92d22a": "132986803ba5795039290587364b6547",
".git/objects/c7/418817439b2f071c93a4a6cee831e996123c0b": "a973381dec3e0988db3e91122a03c303",
".git/objects/ca/a485455c65c2be9e04f3b21023d55266dc6c1b": "cc15b4e7cf7ccf8f4e205475866273cc",
".git/objects/cc/9f37ea58f28ba3ae63eb5f68d5405c7a780586": "e1936fe3004d2f62a129794232b45052",
".git/objects/cd/130cd403f25682f072e7bd7806aa8485987e35": "39fd565db40c424fe39de752ec5c020c",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/588572ce7528194f7675d83040a7ccf15972d7": "3b8a380de65c40e3185c87bd4c245419",
".git/objects/d4/a55d70f940cb2327461b34d9d6afe6b4be682e": "517f5294c9d67a8f6c01132eb0a257a7",
".git/objects/d6/2a754af4b9d6b6e7a11dcda4395b736270d238": "42dae4fd83d1ecbc4638d680cae133f8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/496cdabdcff66b29b81777e5de361622a42b87": "267da8f482dafeb04c82914d6808642e",
".git/objects/db/0c8c51dcbff9a9fdbd58a78d613f9effb2382c": "5baab6b9d70a3349a7cb22d7fa7336cd",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/b85d1010799eecff49df06d8cdbde26ad3464d": "6c484bca639436d1e0dc931eb11e083c",
".git/objects/e1/f7b7eb2eb76b14658f0a2ad963bc79068883cd": "e368bac76fd6d86489999cf709e2f87e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/db198037c18ff31e091bea79dc9f8b2841972b": "1b8c34e5c3a235e7bfd3103ee71ec6c4",
".git/objects/e9/41f1aa61886cb888f83c2a3afe3ba1b09a15aa": "7d2c903cb654d25b72fa2d4d0902bbec",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/0dc5c6dab0507f7eadc9a7fd3617fe03b957da": "e29fcb73a894f437e55246c7197047bd",
".git/objects/f3/807a6b8ea33564dc8eff81f2c2f23e63b51177": "141df38e9e299d5172045dcc7478b5d5",
".git/objects/f4/377f5565b92e07e5f3493631b42d8af0df68f5": "aa4343ebaf4965e114d08f988c62b7a4",
".git/objects/f4/8f6c709b0e9a82ad435a2036d4d8ec6837f2d3": "b6c869f2bc22f80ce2a2245500e03d16",
".git/objects/f4/dd6cbceac8c488b6088daae4330ef5be8cde1c": "5b44aa2d72410172c9e18d3a5c303401",
".git/objects/f5/542ef5e87283a527f62228c9e40f10bfcef0bf": "43023873e8caa0c5683f8af7574e8426",
".git/objects/f5/f65ef9f07a46cf8fa3b8f09b7cfd0196e91b9d": "a6dfe29ffcfe3967c72201244c758f6e",
".git/objects/fd/490f2c20da06aaab14a6fe85c920a3b14177cd": "ea716616e02287b25a8647f684bc31ed",
".git/objects/fd/f4f9b7ab716a7bbc864cd1064f7328a0dfbd34": "1e08c5408af321a9ebd561531d987b0e",
".git/ORIG_HEAD": "f2a2a9328f65b80445c4a492c883ba4c",
".git/refs/heads/main": "3c66ac8dee43eff5ad4b1a27c8153555",
".git/refs/remotes/origin/main": "3c66ac8dee43eff5ad4b1a27c8153555",
"assets/AssetManifest.json": "6e2ba97d94a0f0a862a05a04cad3ef9b",
"assets/assets/characters/icon/ALBEDO.png": "5ea919e563c37af000cb8c69b22a4e0a",
"assets/assets/characters/icon/ALOY.png": "79496e57b52f824b7095bc0d3e4cf1e1",
"assets/assets/characters/icon/AMBER.png": "5b485364766df8c31b00909a6461fbde",
"assets/assets/characters/icon/ARATAKI%2520ITTO.png": "960403731b786238cc9f3e11121bb24c",
"assets/assets/characters/icon/BARBARA.png": "8b0a61c6dc241fbfb45ee736159a9df8",
"assets/assets/characters/icon/BEIDOU.png": "2205006a2a2edd71d0913d2c5fec8493",
"assets/assets/characters/icon/BENNETT.png": "309aa18c59ce6fd29b9ec5baebfcd291",
"assets/assets/characters/icon/CHONGYUN.png": "58375bd187c155a398f77753e1f9aba3",
"assets/assets/characters/icon/DILUC.png": "6e6f57317ce859314331bded68c335e7",
"assets/assets/characters/icon/DIONA.png": "457c28876c3a5cdd8760cad2e8b6c492",
"assets/assets/characters/icon/EULA.png": "cf3e6e54b4b19fe1a5916af980dc0744",
"assets/assets/characters/icon/FISCHL.png": "8067f15d8de5da98dbb6ce5112598b58",
"assets/assets/characters/icon/GANYU.png": "d19557e3e8f92e8090204aa3af7e668d",
"assets/assets/characters/icon/GOROU.png": "fdfa6fea7dc9e628328183183e0541ac",
"assets/assets/characters/icon/HU%2520TAO.png": "6a54af5aca341883859f5d24da3000fe",
"assets/assets/characters/icon/JEAN.png": "eb631369e43ffca5aa89fbfb227f7d39",
"assets/assets/characters/icon/KAEDEHARA%2520KAZUHA.png": "b38f80e18a0c6c2d56541dc06deffe9b",
"assets/assets/characters/icon/KAEYA.png": "9090035286a247b8fffef754cd0491f9",
"assets/assets/characters/icon/KAMISATO%2520AYAKA.png": "ecdcd83eb984597f2fd097ef800545e8",
"assets/assets/characters/icon/KAMISATO%2520AYATO.png": "6713b70c875d723eb22c9effda407377",
"assets/assets/characters/icon/KEQING.png": "70f0ba30832d1ef4fc947cff3a9cf5b7",
"assets/assets/characters/icon/KLEE.png": "0eec919f6330d704248dc00eb73ec6ae",
"assets/assets/characters/icon/KUJOU%2520SARA.png": "f04ebfd37c69bd19fab182ae4d4505b6",
"assets/assets/characters/icon/KUKI%2520SHINOBU.png": "d9e1610f9201fd4d5e8ca93c21380485",
"assets/assets/characters/icon/LISA.png": "963e92d0a4a8c039c08db5be687d728a",
"assets/assets/characters/icon/LUMINE%2520AETHER.png": "04f769b0b1671b5ffbbafefd7286b4b2",
"assets/assets/characters/icon/LUMINE.png": "360b0ae9305d213c8b8cf6a2dfb00810",
"assets/assets/characters/icon/MONA.png": "5ddec58ede0a4193d1bd72f0f792b4fa",
"assets/assets/characters/icon/NINGGUANG.png": "3e20148475a514c274ab317b1b295ad6",
"assets/assets/characters/icon/NOELLE.png": "3aac2c7f25ef15dcd540fe2c3fed99b3",
"assets/assets/characters/icon/QIQI.png": "a8d9152cbec315bd3af1b81ab38bcbb8",
"assets/assets/characters/icon/RAIDEN%2520SHOGUN.png": "70d18b215d0f6f721d3f619743b71a5e",
"assets/assets/characters/icon/RARITY_4.png": "7a6c584130342f6d81bc676499d18ec1",
"assets/assets/characters/icon/RARITY_5.png": "1ff411a0ea00625e406769827dcbfcb1",
"assets/assets/characters/icon/RAZOR.png": "911d75007d943edf93cf5ad1cd683ea6",
"assets/assets/characters/icon/ROSARIA.png": "e4939091b20308d7d430f845bed40959",
"assets/assets/characters/icon/SANGONOMIYA%2520KOKOMI.png": "c4e18b636cbe869264f4f5875bc438d9",
"assets/assets/characters/icon/SAYU.png": "9281e270c104ef7fe6f9424364d95a9f",
"assets/assets/characters/icon/SHENHE.png": "792ade60a3f8305c919f0d09daf70097",
"assets/assets/characters/icon/SUCROSE.png": "f527aa0b45df57842fb097b8c38bf169",
"assets/assets/characters/icon/TARTAGLIA.png": "10cd31b9230b7f5704b5700986fc8b0c",
"assets/assets/characters/icon/THOMA.png": "7b2bf5075e91258d81d2a0586bb5e527",
"assets/assets/characters/icon/VENTI.png": "3223bc2038ec73ad9ea8919492e4b326",
"assets/assets/characters/icon/XIANGLING.png": "1b510cb569d7ad2688a8c4e05c872283",
"assets/assets/characters/icon/XIAO.png": "94ee09c802353c613165f1b4cbfa2da4",
"assets/assets/characters/icon/XINGQIU.png": "4ee7dbc175a319eca4bf0ae111335c58",
"assets/assets/characters/icon/XINYAN.png": "b82dd7741e6bd8eaa99d2ee3aee7f408",
"assets/assets/characters/icon/YAE%2520MIKO.png": "ff80940ea6d2f7c29f3c833714caaa23",
"assets/assets/characters/icon/YANFEI.png": "7699695e87e15431680aaefdadcab4e1",
"assets/assets/characters/icon/YELAN.png": "76cfc9a21e196fd316070196c1396950",
"assets/assets/characters/icon/YOIMIYA.png": "e3ed7ec7de2a2c069870fb20f6a3770f",
"assets/assets/characters/icon/YUN%2520JIN.png": "bfb0624ad7e512723c1f4e6a8ea42ad4",
"assets/assets/characters/icon/ZHONGLI.png": "cfa364293021672c5a65c6a174b873b2",
"assets/assets/visions/ANEMO.png": "6b5c0d861fd1b4791bd602d3e7296598",
"assets/assets/visions/CRYO.png": "157c22f5fd473d3c1684c6ee981540b6",
"assets/assets/visions/ELECTRO.png": "16d344b6abbc369a2db9d46d6f31305b",
"assets/assets/visions/GEO.png": "9c4cd6e14b87fc262cca36e6d0e9bdb0",
"assets/assets/visions/HYDRO.png": "f54c8f0dae23fced358c28126f220a11",
"assets/assets/visions/PYRO.png": "ac3123b42bf631685287e76c8c834a6c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7046cd409b999b689851fc2a7215e02c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9548a337957f1afc74dd496fe137be98",
"/": "9548a337957f1afc74dd496fe137be98",
"main.dart.js": "2576c4c3d4ab5dca6fd0ba5bcc2182f4",
"manifest.json": "772c1fc99fa8bdb6535e347f4b058015",
"version.json": "c815e7ee5e95b6f957a6a162ae417353",
"_config.yml": "932865e374757d33e321eeb2d5e88b6b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
