// const mymessage = function(){
//     const messageItem = document.querySelectorAll('.main-button>ul');
//     messageItem.forEach(item => {
//         item.addEventListener('click', (e) => {
//             e.preventDefault();
//             var preview = document.querySelectorAll('.preview');
//             let trunc = item.querySelectorAll('.truncate');
//             if(item.style.height !== 'auto'){
//                 item.style.height = 'auto';
//                 preview.forEach(pre => {
//                     pre.style.marginBottom = '10px';
//                 });
//                 trunc.forEach(tr => {
//                     tr.classList.remove('truncate');
//                 });
//             }
//             else {
//                 item.style.height = '100px';
//                 preview.forEach(pre => {
//                     pre.style.marginBottom = '0px';
//                 });
//                 trunc.forEach(tr => {
//                     tr.classList.add('truncate');
//                 });
//             }
        
            
            
//             console.log('click');
//         });
//     });
// };

// window.addEventListener('load', mymessage);