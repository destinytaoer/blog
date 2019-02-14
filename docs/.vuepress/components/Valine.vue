<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'BAlEU7J3YXaDNuoOMWC67UT7-gzGzoHsz',// your appId
      appKey: 'QjTpNrsX37DRGfvANeuBhGAL', // your appKey
      notify: true, 
      verify: true, 
      avatar:'mm',
      guest_info: 'nick,mail,link',
      placeholder: 'just go go' 
    });
  },
}
</script>