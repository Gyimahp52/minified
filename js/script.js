document.addEventListener("DOMContentLoaded",function(){window
    .addEventListener("load",function(){const e=performance.timing.loadEventEnd-performance.timing.navigationStart;document
        .getElementById("load-time").textContent=e});const e=performance.getEntriesByType("resource");let t=0;e
        .forEach(e=>{e.transferSize&&(t+=e.transferSize)});const n=(t/1024).toFixed(2);document
        .getElementById("page-size").textContent=n});
