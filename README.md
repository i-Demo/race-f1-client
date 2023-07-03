  <h1 align="center"><b>RACE F1</b></h1>

  - ### Live demo: https://racef1.netlify.app/
  - ### API: https://race-f1-server.vercel.app/api/
  
  - ### Mô tả
    ###Backend: 
      - Tạo Database và API từ data đã crawling. Database dùng MongoDb để lưu trữ và API viết bằng 
      NodeJs + ExpessJs.
      - Gồm 4 API chính:
        Races: POST data Races, GET Races, GET Race Result (https://race-f1-server.vercel.app/api/races)
        Driver: POST data Drivers, GET Drivers (https://race-f1-server.vercel.app/api/driver)
        Team: POST data Teams, GET Teams (https://race-f1-server.vercel.app/api/team)
        Fastest Lap: Post data DHL Fastest Lap Award, GET AWards (https://race-f1-server.vercel.app/api/fastest-lap)
      - Chi tiết code xem tại: https://github.com/i-Demo/race-f1-server
    
    ###Client:
      - Hiển thị dữ liệu các chặng đua trong năm (Vì thời gian làm có hạn nên chỉ crawl dữ liệu của năm 2023)
      - Hiển thị dữ liệu chi tiết về chặng đua đó
      - Hiển thị dữ liệu tay đua qua các năm (Crawl dữ liệu 2021, 2022, 2023)
      - Hiển thị dữ liệu chi tiết các chặng của tay đua đó theo năm ( Xem đồ thị chi tiết )
      - Hiện thị dữ liệu teams (đồ thị pts(point) theo năm) 
      - Vì chỉ mới tiếp xúc three.js nên dùng Fusioncharts thay thế vẽ đồ thị. Bên cạnh đó, dùng @react-three để vẽ 1 model xe cơ bản.
      - Lọc dữ liệu theo năm
      - Có responsive cho tablet & điện thoại.

      Ps: Tất cả dữ liệu Crawl năm 2021,2022,2023 trừ Races và chi tiết Race crawl năm 2023. Tuy nhiên tất cả API và logic đã hoàn thành nên chỉ cần push data lên database thì project vẫn chạy bình thường.

    ###Git:
      - Đã thao tác tạo ra nhánh dev-Demo để up code. Sau đó pull and merge từ nhánh dev-Demo sang nhánh main.

![image](https://user-images.githubusercontent.com/114913776/250466906-2c3c8962-c6ed-4385-b4fa-ac1d8a541275.png)

![image](https://user-images.githubusercontent.com/114913776/250467163-cdd2f7c7-357f-47f9-9370-2b663a811730.png)

![image](https://user-images.githubusercontent.com/114913776/250467322-2d80dbd0-5510-413d-a31c-a1ded2e0ca2f.png)



  - ### Tool
    - Git, Github.
    - IDE: Visual Studio Code, MongoDB Compass.
