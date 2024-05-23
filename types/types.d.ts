
// 公共返回值
interface ResOptions<T> {
    code: string;
    data: T;
    message: string;
}
interface ResOptionsTwoData<T> {
    code: string;
    data: {
        data: T
    } | [];
    message: string;
}

interface ResOptionsTwoDataArray<T> {
    code: string;
    data: {
        data: T[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    } | [];
    message: string;

}

interface Spec {
    key: string;
    value: string;
}

interface cartItem {
    id: number;
    product_id: number;
    product_name: string;
    sales_price: number;
    original_price: number;
    rate: string;
    image: string;
    sku_id: number;
    num: number;
    is_select: boolean;
    specs: Spec[];
}

interface shopCartInfo {
    info: cartItem[]
}


// 接口- 
// 商品展示 推荐 列表 浏览历史 收藏
interface shop {
    id: number,
    wish_id?: number, // 收藏ID
    product_id?: number, // 收藏-商品ID
    product_name: string, // 收藏-商品名
    image: string,
    images?: string[],
    label: string,
    rate?: string, // 收藏-优惠率
    sale_price: number, // 收藏-折扣价
    product_status: number // 收藏-产品状态#0下架#1上架#
    original_price: number,
    discount_rate_price: string,
    discount_ratio?: string,
    collect: number,
    collection?: number,
    star_rating: number,
    intruduce?: string,
    currency: string
    brands_id: number;
    brands_no: string;
    discount_rate: string;
}

// 产品推荐
interface recommendProduct {
    id: number;
    brands_id: number;
    product_id?: number;
    collection?: number,
    discount_ratio?: string,
    rate?: string,
    brands_no: string;
    product_name: string;
    sale_price: number;
    original_price: number;
    star_rating: number;
    image: string;
    images: string[];
    discount_rate: string;
    label: string;
    collect: number;
}


interface shopInfo {
    info: shop[]
}


// 商品信息-v3版本
interface Brand {
    id: number;
    parent_id: number;
    path: string;
    name: string;
    logo: string;
}

interface Spec {
    spec_id: number;
    name: string;
}

interface Specs_group {
    group_id: number;
    name: string;
    specs: Spec[];
}

interface Attribute {
    group_id: number;
    spec_id: number;
    name: string;
}

interface Variant {
    id: number;
    cost_price: number;
    image: string;
    market_price: number;
    stock: number;
    attributes: Attribute[];
}

interface Sku {
    specs_group: Specs_group[];
    variants: Variant[];
}

interface Group_product {
    id: number;
    image: string;
    price: number;
    label: string;
}

interface Value {
    id: number;
    value: string;
}

interface Parameter {
    key: string;
    sort: number;
    values: Value[];
}
// 产品 - 详情信息
interface productV3 {
    brand_id: number;
    brand_name: string;
    series_id: number;
    series_name: string;
    brands: Brand[];
    group_name: string;
    size_desc: string;
    images: string[];
    original_price: number;
    sale_price: number;
    skus: Sku;
    group_products: Group_product[];
    product_name: string;
    order_total: number;
    keywords: string;
    rate: string;
    intruduce: string;
    description: string;
    serivce: string;
    comment_count: number;
    rating_avg: number;
    parameter: Parameter[];
    collect: number;
}

interface productInformation {
    info: productV3
}

// 广告类型
interface Ad {
    type: number;
    title: string;
    image: string;
    copywriting: string;
    anchor_text: string;
    link: string;
    remark: string;
}

// 头部brand菜单
interface series {
    id: number;
    name: string;
    localurl: string;
}
interface megaMenu {
    id: number,
    name: string,
    count: number,
    collections?: collectionMenu[],
    series?: series[]
}
interface megaMenuInfo {
    info: megaMenu[]
}

/* interface collectionMenu {
    text: string,
    series_id: number,
    brands_id?: string
} */
/* 
interface categoriesMenu {
    id: number;
    localurl: string;
    name: string;
}
interface categoriesMenuInfo {
    info: categoriesMenu[]
} */
interface womenMenMenu {
    id: number;
    name: string;
    image?: string;
    parent_id: number;
    children?: womenMenMenu[];
    checkState?: boolean;
}

// 商品类型 - 大类
interface topLevel {
    id: number;
    parent_id: number;
    name: string;
    image: string;
    children?: topLevel[];
}


// 头部滚动消息
interface notify {
    id: number,
    title: string,
    content: string
}

// 首页六大品牌推荐
interface brandsData {
    id: number;
    name: string;
    logo: string;
    count: number;
}

interface brandsRmd {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    data: brandsData[];
}


// new hot special shopMen shopWomen 底部商标
interface designer {
    imgUrl: string,
    name: string
}

// 优惠券领取列表
interface couponList {
    coupon_id: number;
    coupon_name: string;
    start_time: string;
    end_time: string;
    period_of_validity: string;
    explain: string;
    expired: number;
    price: number;
    is_receive: number;
}

interface couponInfo {
    info: couponList[]
}

// 优惠券-用户中心

interface couponUser {
    coupon_record_id: number;
    coupon_id: number;
    coupon_name: string;
    start_time: string;
    end_time: string;
    explain: string;
    expired: number;
    use_status: number;
    price: number;
}

// 首页-资讯
interface Album {
    media_id: number;
    url: string;
}

interface infoCategory {
    id: number;
    name: string;
    localurl: string;
}

interface information {
    id: number;
    category_id: number;
    title: string;
    keywords: string;
    content: string;
    abstract: string;
    source_url: string;
    release_time: number;
    is_top: number;
    static_url: string;
    category: infoCategory;
    album: Album[];
    annex: any[];
    audio: any[];
    video: any[];
    thumbnail_url: string;
}

interface informationInfo {
    info: information[]
}

// 地址信息
interface address {
    id: number;
    first_name: string;
    last_name: string;
    address: string;
    phone: string;
    city: string;
    post: string;
    state_id: number;
    state_name: string;
    country_id: number;
    country_code: string;
    state_code: string;
    country_name: string;
    area_code: string;
    is_default: string;
}
interface addressListInfo {
    info: address[]
}
interface addressInfo {
    info: address
}

// 头部品牌信息
interface collections {
    name: string;
    id: number;
    logo: string;
    desc: string
}
interface brand {
    brandName: string,
    brandLogo: string,
    brandInfo?: string,
    seriersSize?: string,
    brandSeries?: collections[]
}

interface brandInfo {
    info: brand
}

// 品牌-商品列表左侧筛选
interface leftFilterCategory {
    id: number;
    name: string;
    parent_id: number;
    children?: leftFilterCategory[];
    checkState?: boolean
}

interface leftFilterColorlist {
    id: number;
    name: string;
    rgb_value: string;
}

interface leftFilterGenderlist {
    id: number;
    name: string;
    val: number;
}

interface leftFilterSort_list {
    id: number;
    name: string;
}

interface leftFilterRating_count {
    star_rating: number;
    count: number;
}

interface leftFilter {
    categorys: leftFilterCategory[];
    colors: leftFilterColorlist[];
    genders: leftFilterGenderlist[];
    sorts: leftFilterSort_list[];
    rating_count: leftFilterRating_count[];
    collectionList: leftFilterCategory[];
}

// 左侧过滤栏 shoplist 品牌
interface brandsFilter {
    id: number,
    name: string
}

// SEO tdk
interface seoTDK {
    title: string;
    desc: string;
    keyword: string;
    subject: string;
}


interface breadcrumbItem {
    name: string,
    path: string
}

// 站点基本信息
interface siteBaseInfo {
    abbreviation: string;
    currency_abbreviation: string;
    currency_symbol: string;
    default_currency: string;
    default_domain: string;
    android_package_name: string;
    ios_package_name: string;
    location: string;
    error_skip_url: string;
    firebase_url: string;
    logo: string;
    email: string;
    whatsapp: string;
    telegram: string;
    facebook: string;
    messenger: string;
    line: string;
    ios_download_url: string;
    android_app_download_url: string;
    ios_download_qr_code: string;
    android_download_qr_code: string;
    app_url: string;
    is_show_app_info: string;
    shop_address: string;
    site_service_time: string;
    site_name: string;
    site_seo_title: string;
    site_seo_keyword: string;
    site_seo_desc: string;
    ios_appid: string;
    statistical_code: string;
    is_cashback: string;
    is_distribution: string;
    recommendation_rewards: string;
    distribution_level1: string;
    distribution_level2: string;
    distribution_level3: string;
    share_url: string;
}

// 结算-配送
interface delivery {
    delivery_id: number;
    name: string;
    explain: string;
    prescription_start: number;
    prescription_end: number;
    logo: string;
}
// 结算-支付方式
interface payMethod {
    pay_method: payList[]
}
interface payList {
    pay_id: number;
    name: string;
    intrduction: string;
    mark: number;
    logo: string;
    rate: string;
    domain: string;
    is_bill: number;
    accounts: any[];
}

// 结算-信息(商品,右侧金额)
interface Spec {
    key: string;
    val: string;
}

interface Product {
    spec: Spec[];
    spec_str: string;
    sales_price: number;
    original_price: number;
    subtotal: number;
    product_name: string;
    image: string;
    number: number;
}

interface payInfo {
    pay_id?: any;
    subtotal: number;
    shipping_cost: number;
    coupon_discount_amount: number;
    total_amount: number;
    actual_amount: number;
    wallet_payment_amount: number;
    payment_discount: number;
    payment_rate: string;
    coupon_discount: number;
    extra_discount: number;
    products: Product[];
}

// 问答 faq
interface Qa {
    id: number;
    static_url: string;
    title: string;
}

interface faqCategory {
    id: number;
    name: string;
    localurl: string;
    qas: Qa[];
}


interface faqDetailCategory {
    id: number;
    name: string;
    localurl: string;
}

interface faqDetail {
    id: number;
    category_id: number;
    title: string;
    seo_keywords: string;
    seo_description: string;
    content: string;
    static_url: string;
    category: faqDetailCategory;
}



// 博客类别
interface blogCategoryChildren {
    id: number;
    parent_id: number;
    name: string;
    localurl: string;
}

interface blogCategory {
    id: number;
    parent_id: number;
    name: string;
    localurl: string;
    children: blogCategoryChildren[];
}

// 头部语言货币
interface Language {
    name: string;
    code: string;
}

interface Currency {
    abbreviation: string;
    symbol: string;
}

interface langCurr {
    language: Language[];
    currency: Currency[];
}

// 单页

interface signalPage {
    id: number;
    title: string;
    content: string;
    identification: string;
}

// 头部菜单-品牌
interface brandMenu {
    id: number;
    name: string;
    logo: string;
}
// 头部菜单 系列
interface collectionMenu {
    id: number;
    name: string;
    logo: string;
    parent_id: number,
    t_brands_id: string
}

// 头部-搜索三合一
interface Sery {
    series_id: number;
    text: string;
    parent_id: number;
    brands_id: number;
    code: string;
    localurl: string;
}

interface Brand {
    brand_name: string;
    brand_id: number;
}

interface Product {
    id: number;
    product_name: string;
    image: string;
    collection: number;
    sales_price: number;
    original_price: number;
    intruduce: string;
    currency: string;
}

interface searchType {
    series: Sery[];
    brand: Brand[];
    product: Product[];
}

interface searchTypeInfo {
    info: searchType
}

// 品牌详情-品牌信息
interface brandDetailSery {
    id: number;
    name: string;
    desc: string;
    logo: string;
}

interface brandDetail {
    id: number;
    name: string;
    desc: string;
    logo: string;
    parent_id:number;
    series: brandDetailSery[];
}
// 验证码
interface Vcode {
    key: string;
    img: string;
}

// 创建订单返回
interface ceaterOrder {
	order_id: number;
	pay_url: string;
}
// 订单详情
interface order_Spec {
	key: string;
	val: string;
}

interface order_Product {
	spec: order_Spec[];
	spec_str: string;
    product_id:number;
	product_name: string;
	product_image: string;
	sale_price: number;
	number: number;
}

interface order_Shipping_addres {
	first_name: string;
	last_name: string;
	address: string;
	country_code: string;
	state_code: string;
	phone: string;
	city: string;
	state: string;
	country: string;
	post_code: string;
}

interface orderDetail {
	id: number;
	order_num: string;
	create_time: string;
	order_status: number;
	order_status_text: string;
	subtotal: number;
	currency: string;
	currency_symbol: string;
	shipping_cost: number;
	payment_discount: string;
	payment_rate: string;
	coupon_discount: number;
	extra_discount: number;
	total_amount: number;
	actual_amount: number;
	wallet_payment_amount: number;
	pay_id: number;
	user_comments: string;
	carrier: number;
	tracking_number: string;
	logistics_number: string;
	products: order_Product[];
	shipping_address: order_Shipping_addres;
}

// 订单列表

interface orderList {
	id: number;
	order_num: string;
	currency: string;
	currency_symbol: string;
	subtotal: number;
	extra_discount: number;
	total_amount: number;
	actual_amount: number;
	coupon_discount_amount: number;
	wallet_payment_amount: number;
	order_status: number;
	order_status_text: string;
	pay_status: number;
	order_image: string;
	product_name: string;
	first_number: number;
	item_count: number;
	tracking_number: number;
	logistics_number: number;
	products: order_Product[];
}