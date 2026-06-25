const questions = [
  {
    q: "1. Kelebihan contiguous allocation adalah ...",
    o: [
      "tidak pernah terjadi fragmentasi",
      "akses file dapat sangat cepat karena pencarian blok minimal",
      "ukuran file dapat bertambah tanpa batas",
      "tidak membutuhkan ruang disk"
    ],
    a: 1
  },
  {
    q: "2. Komunikasi antar node pada multicomputer umumnya menggunakan ...",
    o: ["Cache Coherence", "MPI", "Shared Memory", "Mutex"],
    a: 1
  },
  {
    q: "3. Struktur berkas tanpa struktur berarti isi berkas dipandang sebagai ...",
    o: [
      "kumpulan direktori bertingkat",
      "kumpulan tabel alokasi",
      "urutan byte atau word",
      "kumpulan blok indeks"
    ],
    a: 2
  },
  {
    q: "4. Perbedaan utama Port-Mapped I/O dan Memory-Mapped I/O adalah ...",
    o: [
      "Port-Mapped I/O tidak memerlukan instruksi CPU",
      "Port-Mapped I/O hanya digunakan untuk RAM, sedangkan MMIO hanya untuk printer",
      "MMIO tidak dapat digunakan untuk perangkat modern",
      "Port-Mapped I/O memakai ruang alamat I/O terpisah, sedangkan MMIO memakai bagian dari ruang alamat memori"
    ],
    a: 3
  },
  {
    q: "5. Uniform naming bertujuan agar ...",
    o: [
      "Nama file otomatis berubah sesuai jenis hardware",
      "Penamaan file atau perangkat tetap seragam meskipun media penyimpanannya berbeda",
      "Semua perangkat memiliki kecepatan sama",
      "Semua perangkat selalu memakai port USB"
    ],
    a: 1
  },
  {
    q: "6. Pada penjadwalan request HDD, algoritma SSTF memilih request berdasarkan ...",
    o: [
      "Ukuran file terbesar terlebih dahulu",
      "Seek distance paling dekat dari posisi head saat ini",
      "Jumlah user yang sedang login",
      "Prioritas aplikasi grafis"
    ],
    a: 1
  },
  {
    q: "7. Protokol cache coherence yang cocok untuk sistem NUMA besar adalah ...",
    o: ["RPC Protocol", "Snooping Protocol", "Directory-Based Protocol", "TCP Protocol"],
    a: 2
  },
  {
    q: "8. Dalam multiprocessor, race condition muncul karena ...",
    o: [
      "CPU tidak memiliki cache",
      "Beberapa CPU mengakses data yang sama secara bersamaan",
      "Beberapa node berkomunikasi menggunakan jaringan",
      "Semua CPU menggunakan sistem operasi berbeda"
    ],
    a: 1
  },
  {
    q: "9. Dalam fungsi scheduling pada manajemen device, jika perangkat I/O sedang sibuk ketika suatu proses membuat I/O request, maka request tersebut akan ...",
    o: [
      "Dipindahkan ke cache prosesor",
      "Langsung dibatalkan oleh sistem operasi",
      "Masuk ke antrian I/O sampai perangkat siap digunakan",
      "Dikirim langsung ke aplikasi pengguna tanpa diproses"
    ],
    a: 2
  },
  {
    q: "10. Kelebihan teknik bit vector adalah ...",
    o: [
      "semua file otomatis terenkripsi",
      "tidak membutuhkan informasi jumlah blok",
      "pencarian ruang kosong dapat dilakukan dengan cepat",
      "tidak membutuhkan ruang pencatatan sama sekali"
    ],
    a: 2
  },

  {
    q: "11. Perusahaan membutuhkan sistem yang mampu tetap melayani pengguna meskipun beberapa server gagal, dapat tersebar di berbagai negara, dan tampak sebagai satu layanan terpadu. Solusi yang paling tepat adalah ...",
    o: ["AMP", "Multicore CPU", "Distributed System", "Multiprocessor UMA"],
    a: 2
  },
  {
    q: "12. Contoh pasangan piranti I/O, device controller, dan device driver yang tepat adalah ...",
    o: [
      "Printer, memory controller, browser driver",
      "Monitor, keyboard driver, SATA controller",
      "SSD, GPU controller, printer driver",
      "SSD, NVMe controller, NVMe driver"
    ],
    a: 3
  },
  {
    q: "13. Pernyataan yang paling tepat mengenai I/O sinkron adalah ...",
    o: [
      "Proses peminta I/O menunggu sampai operasi selesai atau data tersedia",
      "CPU harus berhenti total sampai perangkat selesai bekerja",
      "Perangkat tidak memerlukan interrupt",
      "Proses selalu melanjutkan eksekusi tanpa menunggu hasil I/O"
    ],
    a: 0
  },
  {
    q: "14. Jika semua thread harus mencapai titik tertentu sebelum melanjutkan eksekusi, mekanisme yang tepat adalah ...",
    o: ["Barrier", "Mutex", "Monitor", "Affinity"],
    a: 0
  },
  {
    q: "15. Informasi yang disimpan di dalam berkas dapat berupa ...",
    o: ["hanya kode mesin", "data maupun program", "hanya angka desimal", "hanya karakter teks"],
    a: 1
  },
  {
    q: "16. Pada linked allocation, blok-blok file ...",
    o: [
      "dapat tersebar dan dihubungkan menggunakan pointer",
      "wajib disimpan dalam satu index block",
      "disimpan hanya di RAM",
      "harus selalu berdampingan"
    ],
    a: 0
  },
  {
    q: "17. Unit alokasi terkecil pada penyimpanan berkas disebut ...",
    o: ["blok", "register", "proses", "direktori"],
    a: 0
  },
  {
    q: "18. Multicomputer memiliki karakteristik...",
    o: [
      "Shared memory antar node",
      "Satu OS tunggal untuk semua node",
      "Tidak dapat ditambah node baru",
      "Komunikasi dengan message passing"
    ],
    a: 3
  },
  {
    q: "19. Teknik counting mencatat ruang kosong dalam bentuk ...",
    o: [
      "urutan nama file berdasarkan abjad",
      "daftar password setiap file",
      "alamat blok kosong pertama dan jumlah blok kosong yang mengikutinya",
      "struktur tree of records"
    ],
    a: 2
  },
  {
    q: "20. Berikut adalah teknik load balancing yang bisa dilakukan scheduler pada distributed system, kecuali ...",
    o: ["Least Connections", "Geographic Load Balancing", "NUMA-aware Load Balancing", "Least Response Time"],
    a: 2
  },

  {
    q: "21. Jika satu node pada distributed system gagal maka tugasnya dipindahkan otomatis ke node lain. Tujuan utama mekanisme tersebut adalah ...",
    o: ["Fairness", "Cache Coherence", "Affinity", "Fault Tolerance"],
    a: 3
  },
  {
    q: "22. Dalam sistem UNIX, kategori pengakses berkas umumnya terdiri dari ...",
    o: ["read, write, dan execute", "admin, guest, dan backup", "FAT, NTFS, dan EXT4", "owner, group, dan everyone"],
    a: 3
  },
  {
    q: "23. Sistem modern banyak menggunakan Memory-Mapped I/O karena ...",
    o: [
      "MMIO hanya cocok untuk legacy hardware",
      "MMIO membuat semua perangkat menjadi read-only",
      "CPU dapat mengakses perangkat I/O dengan instruksi yang mirip seperti akses memori",
      "MMIO menghilangkan kebutuhan sistem operasi"
    ],
    a: 2
  },
  {
    q: "24. Expansion bus seperti USB, PCIe, SATA, dan SCSI digunakan untuk ...",
    o: [
      "Menghubungkan sistem internal komputer dengan perangkat I/O tambahan",
      "Menghapus kebutuhan terhadap device driver",
      "Menyimpan semua data proses di RAM",
      "Mengganti fungsi kernel I/O"
    ],
    a: 0
  },
  {
    q: "25. Pada programmed I/O atau polling, kelemahan utamanya adalah ...",
    o: [
      "CPU harus terus memeriksa status device controller sehingga tidak efisien untuk transfer besar",
      "Tidak dapat digunakan pada perangkat input",
      "Device controller mengambil alih seluruh proses tanpa sepengetahuan CPU",
      "Semua data harus disimpan dahulu di printer"
    ],
    a: 0
  },
  {
    q: "26. Device reservation dalam manajemen device bertujuan untuk ...",
    o: [
      "Mempercepat akses berulang dengan menyimpan salinan data di memori utama",
      "Memastikan pemakaian perangkat I/O tidak tumpang tindih dan tidak menimbulkan deadlock",
      "Mengubah semua perangkat menjadi shared device",
      "Menampung data keluaran sementara untuk printer"
    ],
    a: 1
  },
  {
    q: "27. Alasan utama mengapa sistem multiprocessor dapat memberikan peningkatan performa adalah ...",
    o: [
      "Tidak memerlukan sinkronisasi",
      "Tugas dapat dijalankan secara paralel oleh beberapa prosesor",
      "Setiap CPU memiliki sistem operasi berbeda",
      "Antar prosesor dapat berkomunikasi selalu melalui internet"
    ],
    a: 1
  },
  {
    q: "28. Sebuah layanan cloud terdiri atas ribuan server yang tersebar di berbagai negara namun tampak sebagai satu layanan bagi pengguna. Karakteristik yang paling menonjol adalah ...",
    o: ["Shared Memory", "Transparency", "Processor Affinity", "Spinlock"],
    a: 1
  },
  {
    q: "29. Buffering dalam manajemen device bermanfaat karena ...",
    o: [
      "Data I/O dapat ditampung sementara di memori utama untuk mengatasi perbedaan kecepatan dan model transfer antar perangkat",
      "Data yang disalin antar perangkat tidak perlu melewati memori utama",
      "CPU tidak perlu lagi menjalankan proses lain selama operasi I/O berlangsung",
      "Semua perangkat I/O menjadi tidak membutuhkan device driver"
    ],
    a: 0
  },
  {
    q: "30. DMA lebih efisien daripada programmed I/O untuk transfer blok data besar karena ...",
    o: [
      "Transfer data antara perangkat dan memori dapat dilakukan tanpa CPU memindahkan setiap byte",
      "DMA menghapus semua proses yang menunggu I/O",
      "DMA hanya dapat digunakan pada keyboard",
      "CPU harus memindahkan byte satu per satu"
    ],
    a: 0
  },

  {
    q: "31. NTFS dikenal sebagai sistem berkas yang digunakan pada ...",
    o: [
      "Linux sebagai sistem berkas utama",
      "tape magnetis",
      "MacOS klasik sebelum MacOS 9",
      "sistem operasi Windows modern"
    ],
    a: 3
  },
  {
    q: "32. Pada pembacaan file dari SSD modern menggunakan DMA, peran CPU terutama adalah ...",
    o: [
      "Memberi instruksi awal dan menerima notifikasi ketika transfer selesai",
      "Menghapus data lama dari NAND flash",
      "Mengganti fungsi SSD controller",
      "Memindahkan seluruh byte dari SSD ke RAM secara manual"
    ],
    a: 0
  },
  {
    q: "33. Spooling paling tepat digunakan pada perangkat seperti printer karena ...",
    o: [
      "Printer selalu bekerja sebagai perangkat read-only",
      "Printer tidak membutuhkan device driver",
      "Printer umumnya melayani satu job pada satu waktu sehingga job lain perlu diantrikan",
      "Printer memiliki seek time yang besar"
    ],
    a: 2
  },
  {
    q: "34. Peran OS pada multicomputer adalah...",
    o: [
      "Mengelola distributed file system",
      "Job scheduling antar node",
      "Menyediakan RPC dan REST API",
      "Menyediakan cache coherence protocol"
    ],
    a: 1
  },
  {
    q: "35. Konsep device independence dalam perangkat lunak I/O berarti bahwa ...",
    o: [
      "Setiap aplikasi harus membuat fungsi berbeda untuk HDD, SSD, flashdisk, dan CD-ROM",
      "Semua perangkat I/O harus memiliki bentuk fisik, kecepatan, dan cara kerja yang sama",
      "Perangkat I/O dapat bekerja sendiri tanpa device driver dan interrupt handler",
      "Program aplikasi dapat melakukan operasi I/O tanpa perlu mengetahui detail teknis setiap jenis perangkat I/O yang digunakan"
    ],
    a: 3
  },
  {
    q: "36. Jika sebuah core menulis data baru dan cache lain harus menginvalidasi salinan lama, maka mekanisme tersebut merupakan bagian dari ...",
    o: ["Message Passing", "Cache Coherence", "Processor Affinity", "Gang Scheduling"],
    a: 1
  },
  {
    q: "37. Pada strategi per-CPU queue, keuntungan utama dibanding global queue adalah ...",
    o: [
      "Menjamin fairness sempurna",
      "Menghilangkan context switching dan cache miss",
      "Tidak memerlukan scheduler",
      "Mengurangi kontensi terhadap antrean bersama"
    ],
    a: 3
  },
  {
    q: "38. Atribut location pada direktori berisi informasi tentang ...",
    o: ["ukuran file", "nama pemilik file", "hak akses pengguna", "penunjuk lokasi berkas di media penyimpan"],
    a: 3
  },
  {
    q: "39. Sebuah layanan mengarahkan pengguna Indonesia ke server Jakarta dan pengguna Jepang ke server Tokyo. Teknik tersebut merupakan ...",
    o: ["Geographic Load Balancing", "Least Connection", "Round Robin", "Gang Scheduling"],
    a: 0
  },
  {
    q: "40. Proteksi berkas dengan Access Control List dilakukan dengan cara ...",
    o: [
      "menyimpan file hanya di RAM",
      "membuat daftar hak akses untuk setiap berkas",
      "menghapus atribut file",
      "menyatukan semua file ke satu direktori"
    ],
    a: 1
  },

  {
    q: "41. Media seperti tape magnetis lebih sesuai menggambarkan metode akses ...",
    o: ["berindeks", "acak", "langsung", "sekuensial"],
    a: 3
  },
  {
    q: "42. Kelebihan indexed allocation adalah ...",
    o: [
      "semua file kecil menjadi lebih efisien",
      "tidak membutuhkan ruang tambahan",
      "tidak memerlukan blok indeks",
      "mendukung direct access dan tidak menyebabkan fragmentasi eksternal"
    ],
    a: 3
  },
  {
    q: "43. Berkas atau file dalam sistem operasi dapat dipahami sebagai ...",
    o: [
      "bagian RAM yang digunakan untuk menyimpan proses aktif",
      "kumpulan instruksi CPU yang hanya disimpan di register",
      "tabel khusus untuk menyimpan alamat fisik memori",
      "kumpulan informasi yang saling berkaitan, diberi nama, dan disimpan di penyimpan sekunder"
    ],
    a: 3
  },
  {
    q: "44. Karakteristik utama yang membedakan distributed system dari multicomputer adalah ...",
    o: ["Memiliki memori", "Adanya konsep transparency", "Menjalankan proses", "Menggunakan CPU"],
    a: 1
  },
  {
    q: "45. Implementasi direktori dengan linear list berarti ...",
    o: [
      "entri direktori disimpan dalam daftar sederhana",
      "file hanya dapat diakses menggunakan password",
      "semua file wajib memiliki ukuran sama",
      "setiap file selalu disimpan berurutan secara fisik"
    ],
    a: 0
  },
  {
    q: "46. Perbedaan yang tepat antara I/O sinkron dan I/O asinkron adalah ...",
    o: [
      "Pada I/O sinkron, CPU harus berhenti total sampai operasi selesai, sedangkan pada I/O asinkron CPU tidak pernah menggunakan interrupt",
      "Pada I/O sinkron, perangkat tidak membutuhkan driver, sedangkan pada I/O asinkron perangkat selalu bekerja tanpa sistem operasi",
      "Pada I/O sinkron, proses peminta I/O diblok sampai operasi selesai, sedangkan pada I/O asinkron penyelesaian operasi dapat diberitahukan melalui interrupt atau completion notification",
      "Pada I/O sinkron, data tidak dipindahkan ke memori, sedangkan pada I/O asinkron data selalu langsung tersedia tanpa menunggu"
    ],
    a: 2
  },
  {
    q: "47. Shell dalam sistem operasi berfungsi sebagai ...",
    o: [
      "program yang hanya digunakan untuk backup",
      "antarmuka bagi pengguna untuk mengakses layanan sistem operasi",
      "media penyimpan sekunder",
      "alat untuk memperbesar kapasitas hard disk"
    ],
    a: 1
  },
  {
    q: "48. Sebuah core yang menganggur mengambil pekerjaan dari antrean core lain yang sibuk. Teknik ini disebut ...",
    o: ["Gang Scheduling", "Affinity Scheduling", "Static Scheduling", "Work Stealing"],
    a: 3
  },
  {
    q: "49. Berdasarkan organisasi sistem perangkat lunak I/O, urutan alur I/O request dari aplikasi menuju perangkat keras adalah ...",
    o: [
      "Hardware -> interrupt handler -> device driver -> device-independent software -> user process",
      "Device-independent software -> user process -> hardware -> device driver -> interrupt handler",
      "Device driver -> user process -> device-independent software -> interrupt handler -> hardware",
      "User process -> device-independent software -> device driver -> interrupt handler -> hardware"
    ],
    a: 3
  },
  {
    q: "50. Buffering membantu ketika keyboard menulis data ke SSD karena ...",
    o: [
      "Keyboard menghasilkan data kecil/per karakter, sedangkan SSD diperlakukan sebagai perangkat berbasis blok",
      "Buffering menghilangkan kebutuhan file system",
      "Keyboard memiliki transfer rate lebih tinggi daripada SSD",
      "SSD hanya dapat menerima data dalam bentuk suara"
    ],
    a: 0
  },

  {
    q: "51. Perbedaan buffering dan caching yang paling tepat adalah ...",
    o: [
      "Buffering menampung data sementara untuk menjembatani transfer, sedangkan caching menyimpan salinan data agar akses berulang lebih cepat",
      "Caching hanya digunakan pada keyboard",
      "Buffering hanya digunakan untuk operasi grafis",
      "Buffering selalu berada di disk, sedangkan caching selalu berada di printer"
    ],
    a: 0
  },
  {
    q: "52. Sebuah cluster HPC terdiri atas 100 node Linux yang masing-masing memiliki RAM sendiri dan berkomunikasi menggunakan MPI. Sistem tersebut termasuk ...",
    o: ["Multiprocessor", "Multicomputer", "SMP", "UMA System"],
    a: 1
  },
  {
    q: "53. Berikut merupakan tujuan penjadwalan pada sistem multicomputer, kecuali ...",
    o: [
      "Memastikan fault isolation",
      "Menjaga processor affinity",
      "Menyeimbangkan beban kerja antar node",
      "Meminimalkan message passing overhead"
    ],
    a: 1
  },
  {
    q: "54. Direktori dalam sistem berkas berfungsi untuk ...",
    o: [
      "menyimpan instruksi CPU",
      "menjalankan program aplikasi",
      "mengorganisasi dan menyimpan informasi tentang file",
      "menggantikan fungsi RAM"
    ],
    a: 2
  },
  {
    q: "55. Kelemahan indexed allocation untuk file yang sangat kecil adalah ...",
    o: [
      "tetap membutuhkan satu index block sehingga kurang efisien",
      "file hanya bisa dibaca secara sekuensial",
      "file tidak bisa disimpan",
      "file harus selalu dienkripsi"
    ],
    a: 0
  },
  {
    q: "56. Pada cache coherence, masalah utama yang ingin dihindari adalah ...",
    o: ["Deadlock", "Inkonsistensi data antar cache", "Memory leak yang terjadi di tiap cache", "Thrashing"],
    a: 1
  },
  {
    q: "57. Metode indexed access menggunakan ...",
    o: [
      "daftar indeks yang berisi pointer ke data",
      "password untuk membuka file",
      "blok kosong pertama",
      "direktori utama sebagai tempat penyimpanan isi file"
    ],
    a: 0
  },
  {
    q: "58. SSD termasuk perangkat penyimpanan dengan metode akses acak karena ...",
    o: [
      "SSD harus membaca data dari awal sampai akhir secara berurutan",
      "SSD hanya dapat digunakan untuk operasi write-only",
      "Blok data tertentu dapat diakses langsung melalui alamat logis",
      "SSD selalu bekerja secara sinkron tanpa interrupt"
    ],
    a: 2
  },
  {
    q: "59. Indexed allocation menggunakan ...",
    o: [
      "blok indeks yang menyimpan nomor-nomor blok disk milik file",
      "direktori sebagai pengganti media penyimpan",
      "satu segmen kosong yang harus berdampingan",
      "password sebagai penunjuk lokasi file"
    ],
    a: 0
  },
  {
    q: "60. Sebuah sistem terdiri atas node-node independen yang masing-masing menjalankan Linux dan memiliki memori sendiri. Pernyataan yang paling tepat adalah ...",
    o: ["Sistem termasuk multicomputer", "Sistem merupakan UMA", "Sistem menggunakan shared memory", "Sistem menggunakan AMP"],
    a: 0
  },

  {
    q: "61. Contoh operasi pada berkas adalah ...",
    o: ["mengatur kecepatan prosesor", "membaca dan menulis berkas", "mengubah ukuran RAM", "membuat partisi disk"],
    a: 1
  },
  {
    q: "62. Seorang administrator ingin membangun sistem yang mampu berkembang dari 10 menjadi 10.000 node tanpa perubahan arsitektur besar. Pilihan yang paling sesuai adalah ...",
    o: ["UMA", "Distributed System", "AMP", "Single Processor"],
    a: 1
  },
  {
    q: "63. Backup berkas bertujuan untuk ...",
    o: [
      "mengganti fungsi direktori",
      "menyediakan salinan cadangan untuk pemulihan jika berkas asli rusak",
      "menghapus kebutuhan proteksi file",
      "mempercepat CPU menjalankan proses"
    ],
    a: 1
  },
  {
    q: "64. Bus I/O berfungsi menghubungkan device controller dengan elemen internal komputer seperti ...",
    o: ["Sistem operasi dan compiler", "File dan folder", "Aplikasi dan pengguna", "Prosesor dan memori"],
    a: 3
  },
  {
    q: "65. Metode akses direct access memungkinkan sistem untuk ...",
    o: [
      "melompat langsung ke lokasi data yang dikehendaki",
      "mengenkripsi isi file secara otomatis",
      "menyimpan semua file dalam satu direktori",
      "hanya membaca data dari awal file"
    ],
    a: 0
  },
  {
    q: "66. Pada teknik bit vector, setiap bit merepresentasikan ...",
    o: [
      "tersedia atau tidaknya suatu blok disk",
      "jumlah direktori dalam sistem",
      "jenis sistem operasi yang digunakan",
      "nama lengkap file"
    ],
    a: 0
  },
  {
    q: "67. Pada Intel x86, I/O port 0 sampai 64K-1 terutama digunakan untuk ...",
    o: [
      "Menyimpan data grafis utama aplikasi",
      "Mengalokasikan swap space",
      "Control register perangkat I/O",
      "Menyimpan file aplikasi pengguna"
    ],
    a: 2
  },
  {
    q: "68. Keyboard dikategorikan sebagai perangkat dengan modus transfer per karakter karena ...",
    o: [
      "Keyboard menggunakan pengalamatan memory-mapped I/O",
      "Keyboard hanya dapat digunakan oleh satu proses pada satu waktu",
      "Keyboard selalu mengirim data dalam ukuran blok 4 KB",
      "Data input dikirim sedikit demi sedikit sesuai karakter atau event yang dihasilkan"
    ],
    a: 3
  },
  {
    q: "69. Keuntungan utama multicomputer dibanding multiprocessor adalah ...",
    o: ["Tidak membutuhkan sinkronisasi", "Latensi komunikasi lebih rendah", "Skalabilitas lebih tinggi", "Tidak memerlukan jaringan"],
    a: 2
  },
  {
    q: "70. Sebuah server memiliki 4 CPU fisik yang berbagi RAM yang sama dan dijalankan oleh satu sistem operasi. Sistem tersebut termasuk kategori ...",
    o: ["Multicomputer", "Peer-to-Peer System", "Multiprocessor", "Distributed System"],
    a: 2
  },

  {
    q: "71. Kelemahan teknik bit vector adalah ...",
    o: [
      "tidak dapat mencatat blok kosong",
      "hanya bisa digunakan pada tape magnetis",
      "membuat file tidak dapat dihapus",
      "membutuhkan ruang tambahan yang besar jika jumlah blok banyak"
    ],
    a: 3
  },
  {
    q: "72. Kelebihan linked list dalam pengelolaan ruang kosong adalah ...",
    o: [
      "pencarian blok selalu lebih cepat daripada bit vector",
      "tidak mungkin terjadi kerusakan pointer",
      "semua blok kosong harus dicatat di RAM",
      "informasi ruang kosong dapat disimpan pada blok yang memang belum dialokasikan"
    ],
    a: 3
  },
  {
    q: "73. Pada interrupt-driven I/O, CPU tidak perlu terus-menerus memeriksa kesiapan perangkat karena ...",
    o: [
      "Operasi I/O dilakukan tanpa device driver",
      "Perangkat tidak pernah mengalami delay",
      "Semua data selalu tersedia di cache",
      "Device controller memberi sinyal interrupt ketika data siap atau operasi selesai"
    ],
    a: 3
  },
  {
    q: "74. Teknik grouping berbeda dari linked list biasa karena ...",
    o: [
      "hanya dapat digunakan untuk file teks",
      "blok kosong pertama menyimpan banyak pointer ke blok kosong lain",
      "tidak menggunakan blok kosong sama sekali",
      "setiap file disimpan secara berdampingan"
    ],
    a: 1
  },
  {
    q: "75. Fungsi utama processor affinity adalah ...",
    o: [
      "Menjaga proses tetap pada core tertentu untuk mengurangi cache miss",
      "Menambah kapasitas RAM",
      "Memindahkan proses ke seluruh core secara acak sesuai dengan bebannya",
      "Mengurangi kebutuhan sinkronisasi"
    ],
    a: 0
  },
  {
    q: "76. Jika penempatan job ditentukan sebelum sistem berjalan dan tidak berubah selama eksekusi, strategi yang digunakan adalah ...",
    o: ["Work Stealing", "Static Scheduling", "Dynamic Scheduling", "Affinity Scheduling"],
    a: 1
  },
  {
    q: "77. Mekanisme sinkronisasi yang hanya memperbolehkan satu thread memasuki critical section adalah ...",
    o: ["Mutex", "Barrier", "Semaphore", "RPC"],
    a: 0
  },
  {
    q: "78. Pada cluster HPC, gang scheduling digunakan untuk ...",
    o: [
      "Mengurangi cache miss",
      "Mengurangi kapasitas memori",
      "Menjalankan proses paralel secara serentak",
      "Menonaktifkan node idle"
    ],
    a: 2
  },
  {
    q: "79. Spinlock lebih cocok digunakan pada kernel multiprocessor karena ...",
    o: ["Tidak memerlukan memori", "Menggunakan jaringan", "Waktu tunggu biasanya sangat singkat", "Tidak membutuhkan CPU"],
    a: 2
  },
  {
    q: "80. Dalam alur perangkat lunak I/O, fungsi utama lapisan device-independent software adalah ...",
    o: [
      "Menggantikan fungsi semua device driver",
      "Menjalankan operasi fisik pada hardware",
      "Mengontrol langsung sinyal listrik perangkat",
      "Menyediakan fungsi I/O umum fungsi penamaan piranti I/O, proteksi, pelaporan kesalahan"
    ],
    a: 3
  },

  {
    q: "81. Dalam organisasi sistem I/O, mengapa sistem operasi perlu menyediakan antarmuka I/O yang seragam bagi aplikasi?",
    o: [
      "Agar aplikasi tidak perlu mengetahui detail teknis setiap perangkat I/O yang berbeda",
      "Agar semua perangkat I/O memiliki kecepatan transfer yang sama",
      "Agar perangkat I/O tidak membutuhkan device controller",
      "Agar semua data I/O selalu diproses langsung oleh CPU"
    ],
    a: 0
  },
  {
    q: "82. Operasi pada direktori meliputi ...",
    o: [
      "mengganti perangkat keras penyimpanan",
      "menjalankan instruksi mesin",
      "mengatur jadwal CPU",
      "membuat, menghapus, dan melihat isi direktori"
    ],
    a: 3
  },
  {
    q: "83. Perbedaan utama antara device controller dan device driver adalah ...",
    o: [
      "Device controller berada di sisi perangkat keras, sedangkan device driver berada di sisi perangkat lunak",
      "Device controller hanya mengatur aplikasi, sedangkan driver mengatur user interface",
      "Device controller adalah software, sedangkan device driver adalah hardware",
      "Device controller hanya digunakan pada printer, sedangkan driver hanya digunakan pada storage"
    ],
    a: 0
  },
  {
    q: "84. Salah satu tujuan utama adanya direktori adalah ...",
    o: [
      "memudahkan penamaan dan pengelompokan file",
      "menyimpan semua file langsung di RAM",
      "menghilangkan kebutuhan sistem operasi",
      "memperlambat pencarian file agar lebih aman"
    ],
    a: 0
  },
  {
    q: "85. Dalam arsitektur klasik, Northbridge sangat memengaruhi kinerja sistem karena menghubungkan CPU dengan ...",
    o: [
      "BIOS, floppy disk, dan parallel port",
      "RAM, kartu grafis, dan Southbridge",
      "Printer, keyboard, dan mouse",
      "Flashdisk, modem, dan audio"
    ],
    a: 1
  },
  {
    q: "86. Ketika aplikasi meminta membaca file dari SSD, lapisan manakah yang pertama kali menyediakan fungsi atau API I/O yang digunakan aplikasi?",
    o: ["Interrupt handler", "Device controller", "User-level I/O software", "Hardware"],
    a: 2
  },
  {
    q: "87. Atribut protection pada berkas digunakan untuk ...",
    o: [
      "menentukan ukuran maksimum hard disk",
      "menentukan ekstensi file",
      "mengatur hak akses seperti membaca, menulis, atau mengeksekusi file",
      "menghapus file secara otomatis"
    ],
    a: 2
  },
  {
    q: "88. Perbedaan utama waktu akses HDD dan SSD adalah ...",
    o: [
      "HDD tidak membutuhkan antrian request",
      "SSD tidak memiliki seek time mekanik dan rotational latency seperti HDD",
      "SSD selalu lebih lambat daripada tape magnetik",
      "SSD tidak memiliki transfer time"
    ],
    a: 1
  },
  {
    q: "89. Perbedaan mendasar komunikasi pada multiprocessor dan multicomputer adalah ...",
    o: [
      "Multiprocessor menggunakan shared memory sedangkan multicomputer menggunakan message passing",
      "Multiprocessor menggunakan sistem operasi berbeda sedangkan multicomputer tidak",
      "Multiprocessor menggunakan internet untuk sinkronisasi sedangkan multicomputer tidak",
      "Multicomputer menggunakan shared memory sedangkan multiprocessor menggunakan message passing"
    ],
    a: 0
  },
  {
    q: "90. Model penjadwalan pada distributed system dapat berupa...",
    o: [
      "Global Queue dan Per-CPU Queue",
      "Round Robin dan Affinity Scheduling",
      "Centralized, Distributed, dan Hierarchical Scheduling",
      "Static Scheduling, Dynamic Scheduling, dan Gang Scheduling"
    ],
    a: 2
  }
];

const quiz = document.getElementById("quiz");

function renderQuiz() {
  quiz.innerHTML = "";
  questions.forEach((item, qi) => {
    const card = document.createElement("section");
    card.className = "question-card";

    const meta = document.createElement("div");
    meta.className = "question-meta";
    meta.innerHTML = `
      <span class="q-num">${qi + 1}</span>
      <span class="q-tag">Soal Pilihan Ganda</span>
    `;

    const title = document.createElement("h3");
    title.className = "question-text";
    title.textContent = item.q;

    const options = document.createElement("div");
    options.className = "options-grid";

    item.o.forEach((text, oi) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer-btn";
      // huruf a, b, c, d
      btn.textContent = `${String.fromCharCode(97 + oi)}. ${text}`;
      btn.addEventListener("click", () => {
        const buttons = card.querySelectorAll(".answer-btn");
        buttons.forEach(b => b.classList.remove("correct", "wrong"));
        if (oi === item.a) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
        }
      });
      options.appendChild(btn);
    });

    card.append(meta, title, options);
    quiz.appendChild(card);
  });
}

renderQuiz();
