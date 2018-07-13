Vue.component('top-bar',{
    props:['logout-visible'],
    data(){
        return {
        }
    },
    template:`
        <div class="topBar">
             <div class="left">
                <h1>Vue简历编辑器</h1>
                <ul class="actions">
                    <li><button class="button" @click="$emit('changeTheme')">换肤</button></li>             
                    <li><button class="button" @click="$emit('print')">打印</button></li>
                    <li><button class="button" @click="$emit('share')">分享</button></li>
                    <li><button class="button"  @click="$emit('edit')">编辑</button></li> 
                    <li><button class="button" @click="$emit('save')">保存</button></li>
                </ul>
            </div>
            <div class="right">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-user"></use>
                </svg>
                <div class="userName">JenvyXU</div>
                <button class="button" v-show="logoutVisible" @click="$emit('logout')">登出</button>
            </div>
        </div>
    `,
})