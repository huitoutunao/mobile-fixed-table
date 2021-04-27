<template>
    <div class="table-box">
        <div class="t-con-l">
            <div :class="['t-header-l', isShowColShadowStyle ? 'shadow-style' : '']">
                <table>
                    <tbody>
                        <tr>
                            <th>日期</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div :class="['t-body-l', isShowColShadowStyle ? 'shadow-style' : '']">
                <table :style="scrollYStyle">
                    <tbody>
                        <tr>
                            <td>2021-04-16</td>
                        </tr>
                        <tr>
                            <td>2021-04-17</td>
                        </tr>
                        <tr>
                            <td>2021-04-18</td>
                        </tr>
                        <tr>
                            <td>2021-04-19</td>
                        </tr>
                        <tr>
                            <td>2021-04-20</td>
                        </tr>
                        <tr>
                            <td>2021-04-21</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="t-con-r">
            <div class="t-header-r">
                <table :style="scrollXStyle">
                    <tbody>
                        <tr>
                            <th>姓名</th>
                            <th>省份</th>
                            <th>市区</th>
                            <th>地址</th>
                            <th>邮编</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="t-body-r" ref="tableContent">
                <table>
                    <tbody>
                        <tr>
                            <td>小米0</td>
                            <td>广东</td>
                            <td>广州天河区</td>
                            <td>珠江新城F街道201号</td>
                            <td>510000</td>
                        </tr>
                        <tr>
                            <td>小米1</td>
                            <td>广东</td>
                            <td>广州天河区</td>
                            <td>珠江新城F街道201号</td>
                            <td>510000</td>
                        </tr>
                        <tr>
                            <td>小米2</td>
                            <td>广东</td>
                            <td>广州天河区</td>
                            <td>珠江新城F街道201号</td>
                            <td>510000</td>
                        </tr>
                        <tr>
                            <td>小米3</td>
                            <td>广东</td>
                            <td>广州天河区</td>
                            <td>珠江新城F街道201号</td>
                            <td>510000</td>
                        </tr>
                        <tr>
                            <td>小米4</td>
                            <td>广东</td>
                            <td>广州天河区</td>
                            <td>珠江新城F街道201号</td>
                            <td>510000</td>
                        </tr>
                        <tr>
                            <td>小米5</td>
                            <td>广东</td>
                            <td>广州天河区</td>
                            <td>珠江新城F街道201号</td>
                            <td>510000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    //TODO: 1、优化滚动高度；2、优化表格边框样式；3、行内样式单位转换；4、
    import BScroll from 'better-scroll'

    export default {
        name: 'FixedTable',
        props: {
            isShowColShadow: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                myScroll: null,
                scrollXCount: 0,
                scrollYCount: 0
            }
        },
        computed: {
            scrollXStyle () {
                return {
                    transform: `translate(${this.scrollXCount}px, 0px) translateZ(0px)`
                }
            },
            scrollYStyle () {
                return {
                    transform: `translate(0px, ${this.scrollYCount}px) translateZ(0px)`
                }
            },
            isShowColShadowStyle () {
                return this.isShowColShadow && !!this.scrollXCount
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.init()
            })
        },
        beforeDestroy () {
            this.myScroll.destroy()
        },
        methods: {
            init () {
                console.log(this.$refs.tableContent)
                console.log(this.$refs.tableContent.firstChild.offsetWidth)
                this.myScroll = new BScroll(this.$refs.tableContent, {
                    scrollX: true,
                    scrollY: true,
                    bounce: false,
                    probeType: 3
                })
                this.myScroll.on('scroll', this.updatePosition)
                this.myScroll.on('scrollEnd', this.updatePosition)
            },
            updatePosition (pos) {
                console.log(this.myScroll.movingDirectionX)
                // console.log('偏移量', pos)
                this.scrollXCount = pos.x
                this.scrollYCount = pos.y
            }
        }
    }
</script>

<style lang="scss" scoped>
    .table-box {
        border-top: 1px solid #e9ecf5;
        border-left: 1px solid #e9ecf5;
        table {
            border-collapse: collapse;
        }
        th,
        td {
            height: 50px;
            text-align: center;
            color: #666;
            border-right: 1px solid #e9ecf5;
            border-bottom: 1px solid #e9ecf5;
        }
        .t-con-l {
            float: left;
            width: 100px;
            th,
            td {
                width: 100px;
                font-size: 14px;
            }
            .t-header-l {
                position: relative;
                &.shadow-style {
                    box-shadow: 2px 0px 6px 1px rgba(0, 0, 0, .1);
                }
                th {
                    background: coral;
                    color: #fff;
                }
            }
            .t-body-l {
                position: relative;
                width: 100%;
                height: 200px;
                overflow: hidden;
                &.shadow-style {
                    box-shadow: 2px 0px 6px 1px rgba(0, 0, 0, .1);
                }
            }
        }
        .t-con-r {
            margin-left: 100px;
            table {
                width: 500px;
            }
            th,
            td {
                width: 100px;
                font-size: 14px;
            }
            .t-header-r {
                width: 100%;
                overflow: hidden;
                th {
                    color: #fff;
                    background: burlywood;
                }
            }
            .t-body-r {
                width: 100%;
                height: 200px;
                overflow: hidden;
            }
        }
    }
</style>
