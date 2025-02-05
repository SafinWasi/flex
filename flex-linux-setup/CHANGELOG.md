# Changelog

## [1.0.13](https://github.com/GluuFederation/flex/compare/flex-linux-setup-v1.0.12...flex-linux-setup-v1.0.13) (2023-05-12)


### Features

* **flex-linux-setup:** add org_id to client display name ([#946](https://github.com/GluuFederation/flex/issues/946)) ([ad605dd](https://github.com/GluuFederation/flex/commit/ad605dd391e77a69cf3faaf3c1e9019edcf78e89))
* **flex-linux-setup:** node version 18.16.0 ([2e9d88f](https://github.com/GluuFederation/flex/commit/2e9d88fb6e9cc013e97da43768fa6c145638c51d))
* **flex-linux-setup:** upgrade admin-ui ([5479a6a](https://github.com/GluuFederation/flex/commit/5479a6a91530217373478ebbd6cbd9df0b28f85b))


### Bug Fixes

* flex_setup: stopping casa before uninstalling has been added; ([3c715a7](https://github.com/GluuFederation/flex/commit/3c715a7ed4eee18973fd974d703f1b5153023aca))
* **flex-linux-setup:** set redirect_uris as AS for client registration ([52d187b](https://github.com/GluuFederation/flex/commit/52d187b359523f0fedc299664dfc93ccabc61a8e))
* **flex-linux-setup:** set redirect_uris to iss ([9b9b9ff](https://github.com/GluuFederation/flex/commit/9b9b9ff93a204c7675fd8c601162b19bdc64060e))
* prepare for 5.0.13 release ([8578827](https://github.com/GluuFederation/flex/commit/85788276444c5015378120b5801a8848d225b02f))

## [1.0.12](https://github.com/GluuFederation/flex/compare/flex-linux-setup-v1.0.11...flex-linux-setup-v1.0.12) (2023-04-18)


### Features

* **flex-linux-setup:** casa client scopes ([006c952](https://github.com/GluuFederation/flex/commit/006c952830152c970e6c1cb37fd9ed52dc725fd7))
* **flex-linux-setup:** delete casa client scopes upon uninstall ([5451951](https://github.com/GluuFederation/flex/commit/5451951672946ad07f804dab31ae45598d72adfa))


### Bug Fixes

* **flex-linux-setup:** downloading flex archieve ([49f5dc2](https://github.com/GluuFederation/flex/commit/49f5dc2753c48209691b4a3d7549af5cc8323a54))
* **flex-linux-setup:** force downloading flex github archieve ([2b951f6](https://github.com/GluuFederation/flex/commit/2b951f62364391f5190b498f7a0808bca35b9b18))
* **flex-linux-setup:** remove credentialsEncryptionKey field from admin-ui config ([2b94638](https://github.com/GluuFederation/flex/commit/2b94638efaa1dd93d4fc12217f0a00459be69ab3))
* prepare for 5.0.12 release ([994c985](https://github.com/GluuFederation/flex/commit/994c9855cf34c3c805f87943f9203cf58c5810e7))

## [1.0.11](https://github.com/GluuFederation/flex/compare/flex-linux-setup-v1.0.10...flex-linux-setup-v1.0.11) (2023-04-06)


### Features

* **flex-linux-setup:** include SSA in licenseConfig ([cfa0af8](https://github.com/GluuFederation/flex/commit/cfa0af87faf917f0de69f1b8aac1424914b70440))
* **flex-linux-setup:** remove licenseConfig.scanLicenseAuthServerHostname and set licenseConfig.oidcClient.opHost ([6b6390f](https://github.com/GluuFederation/flex/commit/6b6390f3b92d07dd683e880faa84402796721d7d))


### Bug Fixes

* **flex-linux-setup:** CASA authentication script (ref: [#856](https://github.com/GluuFederation/flex/issues/856)) ([eb81e08](https://github.com/GluuFederation/flex/commit/eb81e08128c381001a98fdf617c475c127a6c65c))
* **flex-linux-setup:** don't assk ssa when provided in args ([bc44e69](https://github.com/GluuFederation/flex/commit/bc44e69160a5456727cc3d949434d9b587e7d6b4))
* **flex-linux-setup:** licenseConfig.oidcClient.opHost ([a071a02](https://github.com/GluuFederation/flex/commit/a071a0275f1757e35acb5a068d9a362bf70fc545))
* prepare for 5.0.11 release ([d3cc35a](https://github.com/GluuFederation/flex/commit/d3cc35a70437f4298dadc0f779d190af7370c75b))

## [1.0.10](https://github.com/GluuFederation/flex/compare/flex-linux-setup-v1.0.9...flex-linux-setup-v1.0.10) (2023-03-16)


### Bug Fixes

* **flex-linux-setup:** enforce SSA ([f46b80e](https://github.com/GluuFederation/flex/commit/f46b80edd500a7721358cedfcb43ca342a77401e))
* prepare for 5.0.10 release ([1ffcbc7](https://github.com/GluuFederation/flex/commit/1ffcbc74d837e7a037d6cff71d990573d04bba7b))


### Documentation

* fix jans uninstall linux setup command ([82dcf8c](https://github.com/GluuFederation/flex/commit/82dcf8c87e5e5ace4af0ecb7af18304100c2cb8e))
* update setup uninstallation ([#842](https://github.com/GluuFederation/flex/issues/842)) ([6ba3aaf](https://github.com/GluuFederation/flex/commit/6ba3aafff9f371c895ec566861f40d8112ef17b1))

## [1.0.9](https://github.com/GluuFederation/flex/compare/flex-linux-setup-v1.0.8...flex-linux-setup-v1.0.9) (2023-03-09)


### Bug Fixes

* **flex-linux-setup:** adminui template ([85249a3](https://github.com/GluuFederation/flex/commit/85249a3447242957e45e887634430740ff520059))
* **flex-linux-setup:** decoding ssa jwt ([a953d31](https://github.com/GluuFederation/flex/commit/a953d31a459fac4ca55ff5b0d61cf454635e0673))
* **flex-linux-setup:** no download for deb/rpm packages ([02b9ac4](https://github.com/GluuFederation/flex/commit/02b9ac4f24e20413a9b138df430f28168605f3eb))
* **flex-linux-setup:** set flex version 1.0.9 ([#827](https://github.com/GluuFederation/flex/issues/827)) ([d94b40d](https://github.com/GluuFederation/flex/commit/d94b40d7b79d7baabc547294cce3156ec442ff26))
* prepare for 5.0.0-9 release ([716d309](https://github.com/GluuFederation/flex/commit/716d309350f5713b96f482dde9e0a543e5e62286))

## [1.0.8](https://github.com/GluuFederation/flex/compare/flex-linux-setup-v1.0.7...flex-linux-setup-v1.0.8) (2023-03-02)


### Bug Fixes

* prepare for 5.0.0-8 release ([29e0cbb](https://github.com/GluuFederation/flex/commit/29e0cbb5166d83268ab9c3ee3c5f3e2bc4dd1489))

## [1.0.7](https://github.com/GluuFederation/flex/compare/flex-linux-setup-v1.0.5...flex-linux-setup-v1.0.7) (2023-02-22)


### Features

* flex-linux-setup use tarball to install node_modules in admin-ui ([8a1fd53](https://github.com/GluuFederation/flex/commit/8a1fd53e0f96b02db7f1703c5e2b9498929b8f0c))


### Bug Fixes

* admin-ui database configuration ([f42099e](https://github.com/GluuFederation/flex/commit/f42099e032577599a92474a76caffb37dba9b41c))
* flex-linux-setup always download latest jans-installer ([f5480c2](https://github.com/GluuFederation/flex/commit/f5480c2b271302d259e16ea0a3d93935c6b0a1c8))
* flex-linux-setup check twilio and fido2 client before deploy ([#736](https://github.com/GluuFederation/flex/issues/736)) ([fd28ad3](https://github.com/GluuFederation/flex/commit/fd28ad389646bd42f06f88e256fc94a6eb8092ad))
* flex-linux-setup code smell ([1146797](https://github.com/GluuFederation/flex/commit/1146797fec64213c23e6cc547a1ca72ffe6cff02))
* flex-linux-setup download pyjwt and cryptography instead of gcs ([#724](https://github.com/GluuFederation/flex/issues/724)) ([c28a435](https://github.com/GluuFederation/flex/commit/c28a435ee2206ae100f5782dbe7be10cd2eccf5f))
* flex-linux-setup Dump Admin UI Client and Secret to screen and setup.properties ([#700](https://github.com/GluuFederation/flex/issues/700)) ([69af163](https://github.com/GluuFederation/flex/commit/69af163482ce1a8312d8b8081b274bc787784d8d))
* flex-linux-setup remove Casa.py ([ca6b289](https://github.com/GluuFederation/flex/commit/ca6b28957d12da4179640fd422dfc6b6707b6f1d))
* prepare for 5.0.0-7 release ([7f96937](https://github.com/GluuFederation/flex/commit/7f9693729156b04367b85d0d44a4022a52d53417))

## [1.0.5](https://github.com/GluuFederation/flex/compare/flex-linux-setup-v1.0.4...flex-linux-setup-v1.0.5) (2022-12-08)


### Bug Fixes

* getting ready for a release ([a0de091](https://github.com/GluuFederation/flex/commit/a0de091ca26f2c38378e5b0252ab680cb1e3cd88))


### Documentation

* fix main  README.md ([#634](https://github.com/GluuFederation/flex/issues/634)) ([4c6b303](https://github.com/GluuFederation/flex/commit/4c6b303cfb330e135831734573e63c0955673588))

## 1.0.4 (2022-11-08)


### Features

* **admin-ui:** resolved merge conflict [#412](https://github.com/GluuFederation/flex/issues/412) ([ea5c1e6](https://github.com/GluuFederation/flex/commit/ea5c1e64f7726d947b7bf9fb6cc18f964cb2071c))
* **admin-ui:** reviewed previously updated dependencies [#416](https://github.com/GluuFederation/flex/issues/416) ([ab81760](https://github.com/GluuFederation/flex/commit/ab81760457727c7a5890d89c2f2ec3dabdeb12eb))
* flex-linux-setup add options to setup.properties ([#467](https://github.com/GluuFederation/flex/issues/467)) ([29b9055](https://github.com/GluuFederation/flex/commit/29b9055458f229b1587535cbdf09ded63699fcfd))
* flex-linux-setup ask compoments to install (ref: [#282](https://github.com/GluuFederation/flex/issues/282)) ([8907087](https://github.com/GluuFederation/flex/commit/8907087b057e4ccc31d37d1145a7e60b26820f70))
* flex-linux-setup non-interactive mode ([#340](https://github.com/GluuFederation/flex/issues/340)) ([15a73dc](https://github.com/GluuFederation/flex/commit/15a73dcab6bb8763a7a611a60cb16c041b0707cc))
* flex-linux-setup option -download-exit ([#474](https://github.com/GluuFederation/flex/issues/474)) ([62c5556](https://github.com/GluuFederation/flex/commit/62c555695426de5f83a74db4bd9e0dbc9eeb061d))
* flex-linux-setup uninstall ([#461](https://github.com/GluuFederation/flex/issues/461)) ([de8c700](https://github.com/GluuFederation/flex/commit/de8c700f9002379428969d2f287d9e0f1246312b))
* generate jans-config-api client from multiple swagger specs [#426](https://github.com/GluuFederation/flex/issues/426) ([0870b03](https://github.com/GluuFederation/flex/commit/0870b036b89840f178c6ad4fb2fd7d2d847fe89c))


### Bug Fixes

* fix plugin installation script [#589](https://github.com/GluuFederation/flex/issues/589) ([4da2e07](https://github.com/GluuFederation/flex/commit/4da2e0738a6db0745f9717d62537a6e9cad3497d))
* flex linux setup admin UI client ([#542](https://github.com/GluuFederation/flex/issues/542)) ([ef51e0f](https://github.com/GluuFederation/flex/commit/ef51e0f26a7be83a6689709c38434c0bbd7d0c91))
* flex-linus-setup code smell ([c10bdd3](https://github.com/GluuFederation/flex/commit/c10bdd3b00873ecfd7fba5cb08bac3ebf93b6f1f))
* flex-linux-setup code smell - remove unused var ([a5856d1](https://github.com/GluuFederation/flex/commit/a5856d1c4b952b1fa458f78c7f59142d60c142a0))
* flex-linux-setup download node ([61b6246](https://github.com/GluuFederation/flex/commit/61b6246b86fddcaa4451bc92aec8da47cc96180b))
* flex-linux-setup enable apache module mod_dir (ref: [#291](https://github.com/GluuFederation/flex/issues/291)) ([d92b21a](https://github.com/GluuFederation/flex/commit/d92b21a07a2192765a4c17b10edee911f5d217f6))
* flex-linux-setup import shutil ([3a2f346](https://github.com/GluuFederation/flex/commit/3a2f346d9b2a1864ed33cb0ded1c5bad15e94e80))
* flex-linux-setup missing source_files definition for casa ([363da1d](https://github.com/GluuFederation/flex/commit/363da1df736c5755933e2aea11051de49b0e36da))
* flex-linux-setup nod download ([#508](https://github.com/GluuFederation/flex/issues/508)) ([bab8837](https://github.com/GluuFederation/flex/commit/bab8837291e3450a50419e8e03cc9e1da1820c36))
* flex-linux-setup noninteractive setup ([ad46bd6](https://github.com/GluuFederation/flex/commit/ad46bd6ccf6ea3ddc62a7fc1a30382c9f28e5e42))
* flex-linux-setup prompts ([8dad937](https://github.com/GluuFederation/flex/commit/8dad9375532205878838dbd2dea9ae365964250f))
* flex-linux-setup python executable ([#480](https://github.com/GluuFederation/flex/issues/480)) ([f9f7682](https://github.com/GluuFederation/flex/commit/f9f76822a97958b775dfc3f9989fe367410dca24))
* flex-linux-setup use encoded client secret ([427e2bb](https://github.com/GluuFederation/flex/commit/427e2bb6efc7c80bc9e843ee22fa5bac3e758383))
* flex-linux-setup version 1.0.4-SNAPSHOT ([9f4776d](https://github.com/GluuFederation/flex/commit/9f4776debedd9d8ea0612e2ffc5086b1cd1360f9))
* flex-linux-setup-replace replace-shlex.join() by subprocess.list2cmdline() ([57a4213](https://github.com/GluuFederation/flex/commit/57a42136991157a56168313126d82419fc14e4d8))
* getting ready to release 5.0.0-3 ([e8f3ecc](https://github.com/GluuFederation/flex/commit/e8f3eccc3804a0bcc6075d755dad209b188db444))
* jans-linux-setup flex-plugin install dir ([8c91b77](https://github.com/GluuFederation/flex/commit/8c91b7784bfc19a2340a1c1a10dcc8fecadcbec0))
* jans-linux-setup set Jannsen version to 1.0.3 ([e4e6a61](https://github.com/GluuFederation/flex/commit/e4e6a61a7bdf55882cc9d2c1d33d5d32cd4e5f46))


### Miscellaneous Chores

* release 0.1.1 ([fa0f8a3](https://github.com/GluuFederation/flex/commit/fa0f8a3d951c34317925ef8b147d35110f5916c0))
* release 0.1.2 ([0185ce9](https://github.com/GluuFederation/flex/commit/0185ce9c9c7504f145980ffe7af104baaa34b81c))
* release 5.0.0-2 ([06c6e64](https://github.com/GluuFederation/flex/commit/06c6e64f43a7c98bcb04ba1d48ec97044c19d75d))

## [0.1.2](https://github.com/GluuFederation/flex/compare/flex-linux-setup-v0.1.1...flex-linux-setup-v0.1.2) (2022-08-31)


### Features

* flex-linux-setup non-interactive mode ([#340](https://github.com/GluuFederation/flex/issues/340)) ([15a73dc](https://github.com/GluuFederation/flex/commit/15a73dcab6bb8763a7a611a60cb16c041b0707cc))


### Miscellaneous Chores

* release 0.1.2 ([0185ce9](https://github.com/GluuFederation/flex/commit/0185ce9c9c7504f145980ffe7af104baaa34b81c))

## 0.1.1 (2022-07-14)


### Features

* add acrValues property in admin-ui configuration. [#1016](https://github.com/GluuFederation/flex/issues/1016) ([328c92e](https://github.com/GluuFederation/flex/commit/328c92e1ad62fde56def027711bc6e6c86926d4b))
* add acrValues property in admin-ui configuration. [#1016](https://github.com/GluuFederation/flex/issues/1016) ([328c92e](https://github.com/GluuFederation/flex/commit/328c92e1ad62fde56def027711bc6e6c86926d4b))
* add acrValues property in admin-ui configuration. [#1016](https://github.com/GluuFederation/flex/issues/1016) ([ac8b572](https://github.com/GluuFederation/flex/commit/ac8b572596e9b2d662fb0e024180c9d940751d63))
* add fido2-client lib (ref: [#263](https://github.com/GluuFederation/flex/issues/263)) ([eac50ea](https://github.com/GluuFederation/flex/commit/eac50ea88cf5cc4a0575eed67801045825e49b10))
* add main() function ([01f118c](https://github.com/GluuFederation/flex/commit/01f118c5bf3a63867b384883606f9a2410a3cc0f))
* flex linux setup casa fix ([72903cd](https://github.com/GluuFederation/flex/commit/72903cd15ad3185f5eca48a5672d9d2a30b42ca7))
* flex linux setup casa fix ([72903cd](https://github.com/GluuFederation/flex/commit/72903cd15ad3185f5eca48a5672d9d2a30b42ca7))
* flex-linux-setup add casa install ([0ff917f](https://github.com/GluuFederation/flex/commit/0ff917f82ced8bea57312c7a8e8565d192561d9b))
* flex-linux-setup argparse pkg issue ([d235ef4](https://github.com/GluuFederation/flex/commit/d235ef4410d7481e284c757016abf82bf135fb8a))
* flex-linux-setup ask compoments to install (ref: [#282](https://github.com/GluuFederation/flex/issues/282)) ([8907087](https://github.com/GluuFederation/flex/commit/8907087b057e4ccc31d37d1145a7e60b26820f70))
* flex-linux-setup jans installer args ([#268](https://github.com/GluuFederation/flex/issues/268)) ([b096e83](https://github.com/GluuFederation/flex/commit/b096e8398f5c281972c44e0ce45c579dc8c032d2))
* flex-linux-setup package ([05d51ae](https://github.com/GluuFederation/flex/commit/05d51ae46b99a668996b3a0f0f6c3c4443cfaf1a))
* flex-linux-setup self installer ([d05061f](https://github.com/GluuFederation/flex/commit/d05061f1fd99ace2c6d3962722d484cfc71a7139))
* flex-linux-setup typo ([9523c8a](https://github.com/GluuFederation/flex/commit/9523c8a3878b8b51174e34fbd09e001761fb3a43))
* resolve conflict ([92b462d](https://github.com/GluuFederation/flex/commit/92b462d40e1603412985f90f77577b6bbda97c12))


### Bug Fixes

* casa administrable lockfile ([a422553](https://github.com/GluuFederation/flex/commit/a4225538a332b093fed092cea1b4fc8f722b61d2))
* flex-linus-setup code smell ([c10bdd3](https://github.com/GluuFederation/flex/commit/c10bdd3b00873ecfd7fba5cb08bac3ebf93b6f1f))
* flex-linux-setup able to use existing jans-setup to be used as standalone script ([3ce3b58](https://github.com/GluuFederation/flex/commit/3ce3b58f8d3ac817c07f96d4bb99bb4ae0336d2a))
* flex-linux-setup able to use existing jans-setup to be used as standalone script ([3ce3b58](https://github.com/GluuFederation/flex/commit/3ce3b58f8d3ac817c07f96d4bb99bb4ae0336d2a))
* flex-linux-setup able to use existing jans-setup to be used as standalone script ([1d1e979](https://github.com/GluuFederation/flex/commit/1d1e97997e2f24691975179c7d7fa81cbe50f16c))
* flex-linux-setup add admin-ui apache directive (ref: [#281](https://github.com/GluuFederation/flex/issues/281)) ([1306cb1](https://github.com/GluuFederation/flex/commit/1306cb12fbe70bd92ef1c7f24491c4552f685a6f))
* flex-linux-setup casa installation fixes ([4c1fa73](https://github.com/GluuFederation/flex/commit/4c1fa73140e55cd00e91f98ad7d484b41ffa6820))
* flex-linux-setup casa jansPostLogoutRedirectURI ([bdcfdb7](https://github.com/GluuFederation/flex/commit/bdcfdb74c3b7bada0ccec76a984b520da614ef20))
* flex-linux-setup casa python lib dir ([1e4752b](https://github.com/GluuFederation/flex/commit/1e4752b1d8c796e4402c2aef93cf006345d036ed))
* flex-linux-setup casa-client jansAccessTknAsJwt: false ([7c88349](https://github.com/GluuFederation/flex/commit/7c883497b3ad7492645e1bd854c920d3151e8e74))
* flex-linux-setup change admin-ui-plugin name ([7fb45c5](https://github.com/GluuFederation/flex/commit/7fb45c5107e0585b47a95cfbc539b86caf52d4fb))
* flex-linux-setup code smell - remove unused var ([a5856d1](https://github.com/GluuFederation/flex/commit/a5856d1c4b952b1fa458f78c7f59142d60c142a0))
* flex-linux-setup code smells ([4a97270](https://github.com/GluuFederation/flex/commit/4a972702175455827c433aacc4f360b68f762648))
* flex-linux-setup download links ([22cf221](https://github.com/GluuFederation/flex/commit/22cf221b344801f8efec3f239d09aabda6fa3d6e))
* flex-linux-setup enable apache module mod_dir (ref: [#291](https://github.com/GluuFederation/flex/issues/291)) ([d92b21a](https://github.com/GluuFederation/flex/commit/d92b21a07a2192765a4c17b10edee911f5d217f6))
* flex-linux-setup enable Casa Person Auth script ([589f8a8](https://github.com/GluuFederation/flex/commit/589f8a8a77f6a8baa6f909ac26107e4120c4f38b))
* flex-linux-setup get py_lib_dir from Config ([1f2015b](https://github.com/GluuFederation/flex/commit/1f2015bf78bb26ffb73ef026bca96496ab9c7d70))
* flex-linux-setup import package ([d97258a](https://github.com/GluuFederation/flex/commit/d97258a6ebc74171359c8449cd6f936bd5c9cae1))
* flex-linux-setup more verbosity ([44abfb2](https://github.com/GluuFederation/flex/commit/44abfb2f85715f1a78453ca900e4799c484c9ffb))
* flex-linux-setup move version to version.py ([61ecb19](https://github.com/GluuFederation/flex/commit/61ecb197de425571f15a90d17522eb1c80a7182f))
* flex-linux-setup parser ([83d280e](https://github.com/GluuFederation/flex/commit/83d280e731197f732936d39d97de5d80f769de26))
* flex-linux-setup pass -yes to install.py ([116b791](https://github.com/GluuFederation/flex/commit/116b791b80544ac9fe9fd4266f662b18397bea19))
* flex-linux-setup readme file ([41e7c9d](https://github.com/GluuFederation/flex/commit/41e7c9db37e18590c4b2f66357756efbfef228ed))
* flex-linux-setup readme grammar ([52671bd](https://github.com/GluuFederation/flex/commit/52671bde1157a21b8542f5abaff954e72e5dfc2d))
* flex-linux-setup restart jans-auth after casa ([32b4f56](https://github.com/GluuFederation/flex/commit/32b4f561f1474b1e4fdd5fddb58b3fd4b4f2ddf7))
* flex-linux-setup set jansTrustedClnt: true in casa client ([78999c0](https://github.com/GluuFederation/flex/commit/78999c00bda6dbad607621c873239abb03fce905))
* flex-linux-setup setup arg ([c5db5ab](https://github.com/GluuFederation/flex/commit/c5db5abfc0cbe4a825d1b18ed0d718d1de5a1e0c))
* flex-linux-setup setup profile ([727bbcd](https://github.com/GluuFederation/flex/commit/727bbcd5430e80673b0161e14562c876f7d515cc))
* flex-linux-setup start casa after install ([d139354](https://github.com/GluuFederation/flex/commit/d1393544a66f31a7b2fae374335e9d49096b736e))
* flex-linux-setup update admin-ui plugin url ([9c92b0a](https://github.com/GluuFederation/flex/commit/9c92b0ae9851a84f88b8a78215e827e23b8609bb))
* flex-linux-setup update config-cli plugins ([d2ec21f](https://github.com/GluuFederation/flex/commit/d2ec21f25ed5ffc6f378ca9f6b61adf9acea91eb))
* flex-linux-setup url of casa extrnal files ([285e3bd](https://github.com/GluuFederation/flex/commit/285e3bdba66250eb8895b7231fd7a9376f921709))
* flex-linux-setup var names ([b2252c8](https://github.com/GluuFederation/flex/commit/b2252c80942ac183890d085b6f361e6a82fc1af1))
* flex-linux-setup version 1.0.1-SNAPSHOT ([0d1e9e7](https://github.com/GluuFederation/flex/commit/0d1e9e7fe6f345dd033f5ad84e7b79e71e7f708e))
* **package:** fix package settings ([65453b1](https://github.com/GluuFederation/flex/commit/65453b1281709e74e2f8e5b8609a6979738e14aa))
* update readme ([2c64ca4](https://github.com/GluuFederation/flex/commit/2c64ca4c2e16598cfb5d140ec06651b44f1055f1))
* use authoriztion_url for authz request [#47](https://github.com/GluuFederation/flex/issues/47) ([92f9ade](https://github.com/GluuFederation/flex/commit/92f9ade78eeb6a1affeab2786cf8aaea92e480dd))

## 0.1.0 (2022-03-15)


### Features

* add acrValues property in admin-ui configuration. [#1016](https://github.com/GluuFederation/flex/issues/1016) ([328c92e](https://github.com/GluuFederation/flex/commit/328c92e1ad62fde56def027711bc6e6c86926d4b))
* add acrValues property in admin-ui configuration. [#1016](https://github.com/GluuFederation/flex/issues/1016) ([328c92e](https://github.com/GluuFederation/flex/commit/328c92e1ad62fde56def027711bc6e6c86926d4b))
* add acrValues property in admin-ui configuration. [#1016](https://github.com/GluuFederation/flex/issues/1016) ([ac8b572](https://github.com/GluuFederation/flex/commit/ac8b572596e9b2d662fb0e024180c9d940751d63))
* add main() function ([01f118c](https://github.com/GluuFederation/flex/commit/01f118c5bf3a63867b384883606f9a2410a3cc0f))
* flex linux setup casa fix ([72903cd](https://github.com/GluuFederation/flex/commit/72903cd15ad3185f5eca48a5672d9d2a30b42ca7))
* flex linux setup casa fix ([72903cd](https://github.com/GluuFederation/flex/commit/72903cd15ad3185f5eca48a5672d9d2a30b42ca7))
* flex-linux-setup ([dac8b70](https://github.com/GluuFederation/flex/commit/dac8b705ecb723cc77c43339dd3ebed00cfafa8a))
* flex-linux-setup add casa install ([0ff917f](https://github.com/GluuFederation/flex/commit/0ff917f82ced8bea57312c7a8e8565d192561d9b))
* flex-linux-setup argparse pkg issue ([d235ef4](https://github.com/GluuFederation/flex/commit/d235ef4410d7481e284c757016abf82bf135fb8a))
* flex-linux-setup package ([05d51ae](https://github.com/GluuFederation/flex/commit/05d51ae46b99a668996b3a0f0f6c3c4443cfaf1a))
* flex-linux-setup self installer ([d05061f](https://github.com/GluuFederation/flex/commit/d05061f1fd99ace2c6d3962722d484cfc71a7139))
* flex-linux-setup typo ([9523c8a](https://github.com/GluuFederation/flex/commit/9523c8a3878b8b51174e34fbd09e001761fb3a43))


### Bug Fixes

* flex-linux-setup able to use existing jans-setup to be used as standalone script ([3ce3b58](https://github.com/GluuFederation/flex/commit/3ce3b58f8d3ac817c07f96d4bb99bb4ae0336d2a))
* flex-linux-setup able to use existing jans-setup to be used as standalone script ([3ce3b58](https://github.com/GluuFederation/flex/commit/3ce3b58f8d3ac817c07f96d4bb99bb4ae0336d2a))
* flex-linux-setup able to use existing jans-setup to be used as standalone script ([1d1e979](https://github.com/GluuFederation/flex/commit/1d1e97997e2f24691975179c7d7fa81cbe50f16c))
* flex-linux-setup auiConfiguration.properties link ([dc2418e](https://github.com/GluuFederation/flex/commit/dc2418e3bee478b4eca0cb8b66087ceb86813ca3))
* flex-linux-setup casa installation fixes ([4c1fa73](https://github.com/GluuFederation/flex/commit/4c1fa73140e55cd00e91f98ad7d484b41ffa6820))
* flex-linux-setup casa jansPostLogoutRedirectURI ([bdcfdb7](https://github.com/GluuFederation/flex/commit/bdcfdb74c3b7bada0ccec76a984b520da614ef20))
* flex-linux-setup casa python lib dir ([1e4752b](https://github.com/GluuFederation/flex/commit/1e4752b1d8c796e4402c2aef93cf006345d036ed))
* flex-linux-setup change admin-ui-plugin name ([7fb45c5](https://github.com/GluuFederation/flex/commit/7fb45c5107e0585b47a95cfbc539b86caf52d4fb))
* flex-linux-setup download links ([22cf221](https://github.com/GluuFederation/flex/commit/22cf221b344801f8efec3f239d09aabda6fa3d6e))
* flex-linux-setup enable Casa Person Auth script ([589f8a8](https://github.com/GluuFederation/flex/commit/589f8a8a77f6a8baa6f909ac26107e4120c4f38b))
* flex-linux-setup get py_lib_dir from Config ([1f2015b](https://github.com/GluuFederation/flex/commit/1f2015bf78bb26ffb73ef026bca96496ab9c7d70))
* flex-linux-setup import package ([d97258a](https://github.com/GluuFederation/flex/commit/d97258a6ebc74171359c8449cd6f936bd5c9cae1))
* flex-linux-setup more verbosity ([44abfb2](https://github.com/GluuFederation/flex/commit/44abfb2f85715f1a78453ca900e4799c484c9ffb))
* flex-linux-setup move version to version.py ([61ecb19](https://github.com/GluuFederation/flex/commit/61ecb197de425571f15a90d17522eb1c80a7182f))
* flex-linux-setup parser ([83d280e](https://github.com/GluuFederation/flex/commit/83d280e731197f732936d39d97de5d80f769de26))
* flex-linux-setup pass -yes to install.py ([116b791](https://github.com/GluuFederation/flex/commit/116b791b80544ac9fe9fd4266f662b18397bea19))
* flex-linux-setup restart jans-auth after casa ([32b4f56](https://github.com/GluuFederation/flex/commit/32b4f561f1474b1e4fdd5fddb58b3fd4b4f2ddf7))
* flex-linux-setup set jansTrustedClnt: true in casa client ([78999c0](https://github.com/GluuFederation/flex/commit/78999c00bda6dbad607621c873239abb03fce905))
* flex-linux-setup start casa after install ([d139354](https://github.com/GluuFederation/flex/commit/d1393544a66f31a7b2fae374335e9d49096b736e))
* flex-linux-setup update admin-ui plugin url ([9c92b0a](https://github.com/GluuFederation/flex/commit/9c92b0ae9851a84f88b8a78215e827e23b8609bb))
* flex-linux-setup update config-cli plugins ([d2ec21f](https://github.com/GluuFederation/flex/commit/d2ec21f25ed5ffc6f378ca9f6b61adf9acea91eb))
* **package:** fix package settings ([65453b1](https://github.com/GluuFederation/flex/commit/65453b1281709e74e2f8e5b8609a6979738e14aa))
* update readme ([2c64ca4](https://github.com/GluuFederation/flex/commit/2c64ca4c2e16598cfb5d140ec06651b44f1055f1))
* use authoriztion_url for authz request [#47](https://github.com/GluuFederation/flex/issues/47) ([92f9ade](https://github.com/GluuFederation/flex/commit/92f9ade78eeb6a1affeab2786cf8aaea92e480dd))


### Documentation

* add readme for flex-linux-setup [#28](https://github.com/GluuFederation/flex/issues/28) ([a90a21c](https://github.com/GluuFederation/flex/commit/a90a21c579d838f7ba6f797b32cfff846de7592f))
