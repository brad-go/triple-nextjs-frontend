import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  public render() {
    return (
      <Html>
        <Head>
          <meta
            name="title"
            content="트리플: 여행의 모든 것, 트리플로 한 번에"
          />
          <meta
            name="description"
            content="최저가 예약부터 여행 일정까지 앱 하나로 한 번에! / 항공권, 숙소, 투어·티켓 할인 / 제주도 포함 국내&amp;해외 도시별 여행정보 / 동선 보며 일정짜기 / 장소별 리뷰 / 가계부, 날씨, 길찾기"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover"
          />
          <meta
            property="og:title"
            content="트리플: 여행의 모든 것, 트리플로 한 번에"
          />
          <meta property="og:url" content="https://triple.guide/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta
            property="og:image"
            content="https://assets.triple.guide/images/img-default-page-preview.png"
          />
          <meta property="og:image:width" content="1052" />
          <meta property="og:image:height" content="1052" />
          <meta
            property="og:description"
            content="최저가 예약부터 여행 일정까지 앱 하나로 간편하게 준비하세요!"
          />
          <meta
            name="msapplication-TileImage"
            content="https://triple.guide/icons/favicon-144x144.png"
          />
          <meta name="msapplication-TileColor" content="#1FC1B6" />
          <link
            rel="apple-touch-icon-precomposed"
            href="https://triple.guide/icons/favicon-152x152.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
