<!--
 * @Description: 页脚
 * @Author: Sunly
 * @Date: 2023-09-10 16:33:34
-->
<script setup lang="ts">
const year =
  new Date().getFullYear() > 2023 ? `2023-${new Date().getFullYear()}` : "2023";
</script>

<template>
  <div class="footer">
    <div class="footer-item">© Sunly {{ year }}</div>
    <div class="footer-item">
      <a href="https://github.com/sjx1995/i-blog" target="_blank">
        <Icon name="mdi:github" />
        Github
      </a>
      ·
      <a href="https://sunly.link" target="_blank">
        <Icon name="charm:terminal" />
        About me
      </a>
    </div>
    <div class="footer-item">
      Made with
      <Icon name="mdi:heart" class="show-love" />
      and
      <a href="https://nuxt.com/" target="_blank">
        <Icon name="cib:nuxt-js" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@function makelongshadow($color) {
  $val: 0px 0px $color;
  @for $i from 1 through 60 {
    $val: #{$val}, #{$i}px #{$i}px #{$color};
  }
  @return $val;
}
.footer {
  overflow: hidden;
  padding: 8px 0 0 16px;
  box-sizing: border-box;
  user-select: none;
}
.footer .footer-item {
  @include insetTipText;
  font-size: 14px;
  line-height: 24px;
  .icon {
    font-size: 18px;
    color: #00000088;
  }

  a {
    color: $tip_text_color;
    text-decoration: none;

    &:hover {
      color: $tip_text_hover_color;
      text-decoration: underline;
    }
  }

  .show-love {
    transition: color 0.3s;
    &:hover {
      color: #f5222d;
    }
  }
}
</style>
