
/*
DOM: Document Object Model
khi tải một trang web thì trình duyệt sẽ tạo ra một Dom
browser tạo ra một mô hình dạng cây
Có 3 thành phần : + thẻ tag là Element 
                 + các thuộc tính nằm trong thẻ tag là Atribute 
                 + Text

mỗi ô vuông là một Node môi 

---------------------------------------------------------------

Javascript: cung cấp bộ công cụ để truy xuất vào HTML Dom

--------------------------------------------------------------
Document Object: chính là đại diện cho cả trang web
muốn truy suất bất kì thành phần nào đều phải qua document

lấy element theo id
let getElement= document.getElementById('heading');

console.log({
    element: getElement
});

lấy element theo class
trả về element có class ='' giống mảng theo HTMLCollection

let getElement= document.getElementsByClassName('heading');

console.log({
        element: getElement
    });

lấy theo tag
 let getElement= document.getElementsByTagName('ul');
 console.log(getElement);

lấy theo CSS Selector
let getElement= document.querySelector('.heading');
console.log(getElement);
lấy tất cả css selector
let getElement= document.querySelectorAll('.heading');
let k1= document.getElementsByClassName('box');
console.log(k1);

/////////////////////////////////cẩn thận cái này////////////////
lấy 1 phần tử element
Cách 1: Sử dụng querySelector
Cách 2: getElementByID

còn lại Class, Tag, thì trả về HTML Collection
(có các property giống mảng)

querySelectorAll: trả về nodelist

////////////////////////////////////////////////////

Dom attribute
    c1
- ta có thể truy xuất các atrribute bằng các hàm set và get 
( có thể tạo ra các attribute riêng cho element)
    const element= document.querySelector("h1");
    element.setAttribute('class','beor');
    console.log(element.getAttribute('class'));

    element.setAttribute('bao','baodayne');
    console.log(element.getAttribute('bao'));

    c2
- hay có thể truy xuất các atrribute bằng dấu . (chỉ với các element 
    hợp lệ với với các attribute đó )

    tạo cho thẻ h1 attribute title= 'bao123'
    element.title = 'bao123';
    console.log(element.title);

    **NOTE:
    không thể tạo cho element các atrribute mà bản thân element đó 
    không hợp lệ được
    vd: không thể tạo atrribute title cho thẻ a đc
    const element2 = document.querySelector("a");
    element2.title= 'beo147';
    sẽ báo lỗi nếu muốn làm thì nên làm theo cách 1


    ///////////////////////////////////////////////////////////////
  
    InnerText vs textContent 

    để lấy và thay đổi text node cua element

    const element= document.querySelector(".beos");
    
    lấy text node của element h1
    console.log(element.innerText);
    console.log(element.textContent);

    thay đổi text node của element h1
    element.innerText = 'bao111111111';
    element.textContent = 'bao111111111';

    
        **NOTE: phân biệt innerText và textContent

        - innerText: nội dung lấy đc sẽ là nội dung mà 
            bạn thấy được trên trình duyệt
        - textContent: nội dung lấy đc sẽ là nội dung text thật sự nằm 
            trong text 

        - cả innetText và contentText đều bỏ qua thẻ tag

            vd: 
        console.log(element.innerText);
        sẽ lấy ra nội dung mà bạn thấy trên cửa sổ console

        console.log(element.textContent);
        sẽ lấy ra cả khoảng trống giữa thẻ h1 và thẻ span
            
        Chú ý: nếu thêm text node thuộc thẻ h1---h5 vào chính thẻ h thì sẽ ko đc

     //////////////////////////////////////////////////
     
     innerHTML vs outerHTML

    - Dùng để thêm một element Node vào một element đang có sẵn

    - innerHtml: có thể dùng để thêm vào một element hoặc một tesxt node vào 
                thẻ html đang chọn

        const element = document.querySelector(".box");
        element.innerHTML = "<h1>New heading</h1>" (thêm một element)
        element.innerHTML = "New heading3333" (thêm một text node)

                có thể lấy ra nội dung có trong element đang
                gọi tới
        console.log(element.innerHTML);
        
    **Note: nếu element đang gọi tới có text node sẵn thì khi dùng innerHtml
            thì text node cũ sẽ bị ghi đè bởi element hoặc text node
            thêm vào sau

    **Note: nếu thêm element thuộc thẻ h1---h5 vào chính thẻ h thì nó sẽ
            đc thêm vào ngay đằng sau thẻ h đó chứ không thể ghi đè được

    - outerHTML: đối với element đang bị gọi tới bởi outerHtml
                thì nó sẽ bị ghi đè bởi nội dung của chính outerHtml

        element.outerHTML = "<span>beora</span>";
        (thẻ div.box đã bị ghi đè bởi thẻ span.beora)

                outerHtml khi lấy ra thì nó sẽ lấy luôn thẻ html đang gọi tới nó
                console.log(element.outerHTML);
    **Note: khác với innerHtml chỉ lấy nội dung outerHtml sẽ lấy chính thẻ 
            gọi tới nó

////////////////////////////////////////////////////////////////////////////////

    DOM CSS

    - ta có thể CSS cho element thông qua DOM thông  qua 2 cách

    C1: Dùng style 
    vd:
    element.style.color = "blue";
    element.style.fontSize = "40px";
    element.style.backgroundColor = "red";
    element.style.height = "200px"
    console.log(element);

    C2: Dùng Object.assign
    dùng Object.assign(element muốn css, {} mảng các thuộc tính muốn CSS)
    vd:
    const element = document.querySelector(".box");
    Object.assign(element.style, {
    color: "blue",
    fontSize: "40px",
    height: "200px",
    backgroundColor: "red"

    **Note: - Các thuộc tinh CSS này sẽ được CSS theo dạng Inline
                console.log(element);
            - Không nên áp dụng cách  này để CSS chỉ dùng nó khi 
                muốn thêm các thuộc  tính mà thôi 
    

////////////////////////////////////////////////////////////////////////
   
        Claslist propety

    - Thuộc tính classlist : có thể quản lý các phương thức của thuộc tính này 
        hoặc truy xuất các giá trị có liên quan đến class mà element box đang 
        gọi tới (length, values,....)
        
        + length : trả về số lượng class trong element trong element node đang gọi tới
            const element = document.querySelector(".box");
            console.log(element.classList.length);
        **Note: nếu có 2 class trùng nhau thì sẽ chỉ tính lần

        + truy xuất class qua chỉ mục
            const element = document.querySelector(".box");
            console.log(element.classList[2]);
        
        + value: trả về 1 "chuỗi" các giá trị class có trong element node
            const element = document.querySelector(".box");
            console.log(element.classList[2]);

    - Sử dụng các phương thức trong classList

        + add: thêm một class vào element node
            const element = document.querySelector(".box");
            element.classList.add("kaka", "kiki")

        + contain: kiểm tra element node có class đang tìm kiếm hay ko 
                    trả về kiểu boolen
            const element = document.querySelector(".box");
            element.classList.add("kaka", "kiki")
            console.log(element.classList.contains("ro"));

        + remove: xóa đi class truyền vào, nếu ko tồn tại thì ko có gì xảy ra
            const element = document.querySelector(".box");
            element.classList.remove("ro")

        + toggle: sẽ kiểm tra element node nếu có class đang truyền vào thì
            nó sẽ xóa boe class đó nếu ko có thì nó sẽ thêm vào
            const element = document.querySelector(".box");
            element.classList.toggle("ro")

        **ngoài:
        const element = document.querySelector(".box");
        setTimeout(() => {
            element.classList.remove("ken")
        }, 3000)

        setInterval(() => {
            element.classList.toggle("ken")
        }, 1000)
            
        /////////////////////////////////////////////////////
            DOM event

        - artribute event: event đc định nghĩa ngay trong tag
            on + Tên sự kiện
            vd: on + sự kiện click: onclick

            <h1 onclick="console.log(Math.random())">binkachu</h1>
            **NOTE: Sự kiện nổi bọt
        
        - Asign event using element node: gán sự kiện qua element node

            const element = document.querySelector(".box");
            element.onclick = function (e) {
                console.log(e.target);
            }

            **NOTE: nên đặt một biến e (hay viết tắt của event) 
                    thông qua e ta có thể sử dụng thông tin liên quán đến 
                    event (target: chính element mà đang lắng nghe DOM event,... )
                    
            - vd: click vào thẻ nào thì in ra element đó
            const element = document.querySelectorAll("h1");
            for(var i = 0; i < element.length; ++i) {
                element[i].onclick = function (e) 
                    console.log(e.target)
                }
            }
    /////////////////////////////////////////////////////////////////////////////
            DOM event example

        - onchange: khi mà value bị thay đổi thì nó sẽ trả về
            (giá trị của nó khác vs giá trị ban đầu)
            const element = document.querySelector('input[type="text"]');
            element.onchange = function (e) {
                console.log(e.target.value);
            }
            + dùng với checkbox: có thuộc tính checked để dùng cho check box
                trả về kiểu boolen
            const check = document.querySelector('input[type="checkbox"]');
            check.onchange = function (e) {
                console.log(e.target.checked);
            }
        - oninput: nó sẽ lấy giá trị hiện tại đang thao tác
            const element = document.querySelector('input[type="text"]');
            element.oninput = function (e) {
                console.log(e.target.value);
            }
        - onkeydown: 
        - onkeyup:
        - onkeypress: lấy giá trị hiện tại đang thao tác

        + Đối vs keybroadevent: có thuộc tính which để đánh 
            dấu phím trên bàn bàn phím 
        const element = document.querySelector('input[type="text"]');
        element.onkeyup = function (e) {
            console.log(e.which);
            
            switch(e.which) {
                case 27:
                    console.log("EXIT");
                    break;
                case 13:
                    console.log("lum la");
                    break;
                        
                    
            }
        }
    /////////////////////////////////////////////////////////////////
        PreventDefault and StopPropagation

        - preventDefault: ngăn chặn sựu kiện mặc định của CSS (VD: ngăn chặn việc 
            chọn link của thẻ a)
        vd: chỉ chuyển trang khi thẻ a click vào là thẻ facebook (nếu thẻ click vào
            có href ko phải facebook thì ko chuyển trang)
            
        const element = document.querySelectorAll("a");
        for (var i=0; i < element.length; ++i) {
            element[i].onclick = function (e) {
                if (!e.target.href.startsWith("https://www.facebook.com/"))
                    e.preventDefault();
            }
        }
        //mặc dù là thẻ a nhưng khi click vào f8 nó vẫn ko chuyển trang

        vd: khi ta focus vào thẻ input thì thẻ ul sẽ hiện ra nhưng khi ta click
            chuột vào thẻ ul thì nó lại biến mất vì khi click thì hành động
            focus vào thẻ input đã dừng lại (thẻ input hover thẻ ul) bài toán
            đặt ra không biến mất thẻ ul khi click vào nó 

        const element = document.querySelector("ul");
        element.onmousedown = function (e) {
            e.preventDefault();
        }
        element.onclick = function (e) {
            console.log(e.target)
        }

        - StopPropagation: ngăn chặn sự kiện nổi bọt
        vd: thẻ button nằm trong thẻ div nên sẽ xảy ra sự kiện nổi bọt
        document.querySelector(".div").onclick = function (e) {
            console.log("day la the div");
        }

        document.querySelector("button").onclick = function (e) {
            e.stopPropagation();// dòng này ngăn nổi bọt
            console.log("day la the button");
        }

        vd: chặn sự kiện nổi bọt của thẻ ul và li
        const element = document.querySelector("ul");
        element.onmousedown = function (e) {
            e.preventDefault();
        }

        document.querySelector("ul").onclick = function (e) {
            console.log("day la the ul");
        }

        const kk = document.querySelectorAll("li");
        for (let i = 0; i< kk.length; ++i) {
            kk[i].onclick = function (e) {
                e.stopPropagation();
                console.log("day la the li");
            }
        }

    ////////////////////////////////////////////////////////////////////
        Event listener

        - event listener và dom event giống nhau nhưng tùy lúc mà sử dụng

        - Khi lắng nghe sự kiện thì ta hình dung ra
            1. Xử lý nhiều việc khi 1 event xảy ra
            2. Lắng nghe / hủy bỏ lắng nghe
        + Vs Dom event:
        + gán một fuction cho event và làm nhiều công việc
            trong function đó 
        const element = document.querySelector(".lele");
        element.onclick = function() {
            //viec 1
            console.log("viec 1");
            //viec 2
            console.log("viec 2");
            //viec 3
            alert("viec 3");
        }
        + hủy lắng nghe sự kiện: ghi đè 1 function rỗng 
            lên sự kiện
        const element = document.querySelector(".lele");
        element.onclick = function() {
            //viec 1
            console.log("viec 1");
            //viec 2
            console.log("viec 2");
            //viec 3
            alert("viec 3");
        }
        // sau khi thực hiện sự kiwwnj onclick trên thì 
            sau 3s sẽ ghi đè lên sự kiện onclick trên bằng
            một function rỗng bằng hằm setTimeout
        setTimeout(function () {
            element.onclick = function () {}
        }, 3000)

        + Vs Event listener:
        + gán một fuction cho event và làm nhiều công việc
            ta có thể làm riêng lẻ từng công việc
        vd1:
        const element = document.querySelector(".lele");
        element.addEventListener("click", function (e) {
            console.log("viec 1");
        });

        element.addEventListener("click", function (e) {
            console.log("viec 2");
        });

        element.addEventListener("click", function (e) {
            console.log("viec 3");
        });

        + Hủy lắng nghe
        const element = document.querySelector(".lele");
        function viec1 () {
            console.log("viec 1");
        }

        function viec2 () {
            console.log("viec 2");
        }
        element.addEventListener("click", viec1);
        element.addEventListener("click", viec2);
        // dùng removeListener để dừng viec2
        setTimeout(function () {
            element.removeEventListener("click", viec2)
        }, 3000);

        - Dom event sử dụng khi muốn lắng nghe sự kiện nào đó
            mà ko muốn gỡ bỏ nó (trường hợp đơn giản), trong trường hợp làm 
            nhiều việc trong 1 sự kiện vẫn có thể sử dụng Dom event (nhưng
            nếu nhiều quá thì nên dùng Event listener để rõ ràng hơn) 

        - Event listener sử dụng khi 1 sự kiện diễn ra nhưng muốn hủy lắng 
            nghe sự kiện trong trường hợp cụ thể nào đó (hữu hiệu khi có nhiều
            công việc)
*/
