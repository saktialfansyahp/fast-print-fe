# Fast-Print-FE

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Fitur

1. Halaman Produk

   Website ini menyediakan halaman khusus yang memungkinkan pengguna untuk melihat daftar lengkap produk yang tersedia. Setiap produk ditampilkan dengan detail lengkap seperti nama, kategori, status, harga, dan aksi yang dapat dilakukan terhadap produk tersebut.

2. Tambah Produk

   Pengguna dapat menambahkan produk baru ke dalam sistem dengan mudah. Fitur ini memungkinkan pengguna untuk memasukkan informasi rinci tentang produk termasuk nama, kategori, status, dan harga produk.

3. Edit Produk

   Website ini memfasilitasi pengguna untuk melakukan perubahan terhadap produk yang telah ada. Pengguna dapat mengedit informasi produk seperti nama, kategori, status, dan harga sesuai kebutuhan.

4. Hapus Produk

   Fitur ini memungkinkan pengguna untuk menghapus produk tertentu dari sistem. Penghapusan ini bersifat permanen dan memastikan manajemen produk yang efisien.

5. Menampilkan Produk dengan Kategori Bisa Dijual

   Pengguna dapat dengan mudah menampilkan daftar produk yang sesuai dengan kriteria kategori "bisa dijual". Fitur ini membantu dalam mengidentifikasi produk yang siap untuk dijual.

6. Sortir Ascending dan Descending

   Website ini menyediakan opsi untuk mengurutkan daftar produk secara ascending (terendah-tertinggi) dan descending (tertinggi-terendah) berdasarkan nama produk. Pengguna dapat memilih opsi yang sesuai untuk mempermudah pencarian produk.

7. Pencarian Berdasarkan Nama Produk

   Pengguna dapat mencari produk dengan cepat dan efektif melalui fitur pencarian. Pencarian ini memungkinkan pengguna untuk mencari produk berdasarkan nama produk, membantu navigasi yang lebih efisien.

## Header Custom yang Diberikan

Website ini menggunakan beberapa header kustom yang perlu diperhatikan untuk pengelolaan permintaan HTTP. Berikut adalah beberapa header beserta penjelasan masing-masing:

### Access-Control-Allow-Headers:

Nilai: Content-Type, Authorization
Keterangan: Header ini memungkinkan server untuk menerima permintaan yang memiliki header Content-Type dan Authorization.

### Access-Control-Allow-Methods:

Nilai: GET
Keterangan: Header ini mengizinkan metode HTTP GET untuk digunakan dalam permintaan.

### Access-Control-Allow-Origin:

Nilai: http://localhost:8081
Keterangan: Header ini mengizinkan akses permintaan dari domain yang diberikan (localhost pada port 8081).

### Cache-Control:

Nilai: no-cache, no-store, max-age=0, must-revalidate
Keterangan: Header ini mengendalikan perilaku caching, memastikan konten tidak disimpan dalam cache.

### Connection:

Nilai: keep-alive
Keterangan: Header ini mengindikasikan bahwa koneksi harus dijaga agar tetap terbuka setelah merespons permintaan.

### Content-Type:

Nilai: application/json; charset=utf-8
Keterangan: Header ini memberikan informasi mengenai tipe konten yang dikirim dalam respons, yaitu JSON dengan pengodean karakter UTF-8.

### Date:

Nilai: Sun, 24 Sep 2023 15:07:22 GMT
Keterangan: Header ini menunjukkan waktu saat respons HTTP dihasilkan.

### Pragma:

Nilai: no-cache
Keterangan: Header ini menginstruksikan agen pengguna untuk tidak menggunakan cache saat memproses respons.

### Server:

Nilai: golang
Keterangan: Header ini menyatakan server yang digunakan (GoLang dalam hal ini).

### Set-Cookie:

Nilai: ci_session=sXhNYptpnUXQZUBk9uacp3g95X08cUGvK1tBkDq2hu4=; Path=/; Expires=Session; HttpOnly;
Keterangan: Header ini digunakan untuk mengirim informasi tentang cookie yang harus diatur pada sisi klien.

### Strict-Transport-Security:

Nilai: max-age=31536000
Keterangan: Header ini menginstruksikan browser untuk selalu menggunakan HTTPS selama periode waktu tertentu (dalam detik).

### Transfer-Encoding:

Nilai: chunked
Keterangan: Header ini mengindikasikan bahwa konten dikirim dalam bagian-bagian "chunked".

### X-Credentials-Username:

Nilai: tesprogrammer230923C02
Keterangan: Header ini menampilkan nama pengguna yang dihasilkan secara dinamis berdasarkan waktu server.

### X-Credentials-Password:

Nilai: md5 dari = bisacoding-'tanggal sekarang (angka)'-'bulan sekarang (angka)'-'2 digit terakhir tahun sekarang (angka)'
Keterangan: Header ini menyediakan informasi terenkripsi terkait kata sandi.

### X-Powered-By:

Nilai: it-programmer
Keterangan: Header ini memberikan informasi tentang teknologi yang digunakan untuk menggerakkan website ini.

# Note

Pastikan server berjalan di Port 8081
