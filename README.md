# [TRIPLE 기업과제]

<br />

### :rocket: [DEMO](https://triple-nextjs-frontend.vercel.app/) &nbsp;&nbsp;&nbsp; :books: [STORYBOOK](https://62c5bbdcfb35a62783a0c96b-bhfkuxuxck.chromatic.com/)

![구현 이미지](https://user-images.githubusercontent.com/68905615/177617528-cb223872-af07-49ce-b008-bd27992c30c7.png)

## 목차

1. [프로젝트 소개](#speaking_head-1-프로젝트-소개)
2. [사용된 기술 스택](#wrench-2-사용된-기술-스택)
3. [저장소 사용 방법](#electric_plug-3-저장소-사용방법)
4. [핵심 기능 구현](#gear-4-핵심-기능-구현)
5. [디렉토리 구조](#open_file_folder-5-디렉토리-구조)

## :speaking_head: 1. 프로젝트 소개

> Next.js와 TypeScript를 사용해 트리플 홈페이지의 한 섹션을 구현합니다.

- 개인 프로젝트
- 제작 기간: 2022.06.29 ~ 2022.07.06

[⬆️ Back to top](#목차)
<br />

## :wrench: 2. 사용된 기술 스택

![](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white) ![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white) ![](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white) ![](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white)
![](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white) ![](https://img.shields.io/badge/Testing%20Library-E33332?style=for-the-badge&logo=Testing%20Library&logoColor=white)

#### 2-1. React

- 컴포넌트 단위 개발을 통해 생산성과 재사용성, 유지보수성이 높다고 생각하여 기술을 선택했습니다.

#### 2-2. Next.js

- 특별히 페이지 구조가 많은 프로젝트는 아니었고, SSR을 구현할 프로젝트도 아니었습니다.
- 그러나 Next.js의 사전 렌더링(`pre-rendering`)을 통해 데이터의 변화가 없는 단일 페이지를 구현하기에 적합하다고 생각했습니다.
- 검색 엔진 최적화에 도움이 되기 때문에 선택했습니다.

#### 2-3. TypeScript

- 타입을 지정을 통해 오류를 줄여 버그를 예방할 수 있기 때문에 선택했습니다.
- 개발자의 코드 의도를 더 명확히 나타낼 수 있기 때문에 선택했습니다.

#### 2-4. Styled-Components

- 컴포넌트를 스타일을 지정하는데 적합하기에 사용했습니다.
- props를 통해 간편하게 스타일을 변환할 수 있기 때문에 사용했습니다.
- CSS 파일을 별도의 문서로 만들 필요없이, 컴포넌트화 하기 때문에 유지보수에 더 유리하다고 생각합니다.

#### 2-5. Storybook

- 각 개별 컴포넌트 UI를 분리해서 개발하기 위해 사용했습니다.

#### 2-6. ESLint & Prettier

- 일관된 코드 스타일로 작성하기 위해 사용했습니다.
- 작성된 코드를 통해 문법적 오류나 안티 패턴을 찾기 위해 사용했습니다.

#### 2-7. Jest & Testing Library

- 테스트를 통해 개발을 더 빠르게 하고, 오류를 줄이기 위해 사용했습니다.
- Jest와 Testing Library를 사용해 단위 테스트를 진행하고, 나아가 통합 테스트를 해보고 싶어서 사용했습니다.

[⬆️ Back to top](#목차)
<br />

## :electric_plug: 3. 저장소 사용방법

#### 3-1. 프로젝트 실행

git clone하여 프로젝트를 내려받습니다.

```bash
git clone https://github.com/brad-go/triple-nextjs-frontend.git
```

아래 커맨드로 패키지를 설치합니다.

```bash
yarn install
```

아래 커맨드로 프로젝트를 실행합니다.

```bash
yarn next dev
```

#### 3-2. Lint & Formatter

##### ESLint 실행하기

코드 퀄리티를 체크하고 싶다면 아래 커맨드를 사용합니다.

```bash
yarn lint:es
```

##### 모든 테스트 실행하기

```bash
yarn test
```

##### 특정 이름으로 테스트 실행하기

```bash
yarn test 'metric'
```

[⬆️ Back to top](#목차)
<br />

## :gear: 4. 핵심 기능 구현

<div align="center">
<img src="https://user-images.githubusercontent.com/68905615/177617535-31d85b01-f350-4ba0-b09f-79d47b27f7d2.gif" alt="핵심 기능">
</div>

### 4-1. 영역별 fade-in 애니메이션 구현하기

#### 요구 사항

- 좌측 이미지, 지표 문구, 수상 내역 순으로 표시해야 합니다.
- 영역별로 살짝 떠오르는 듯한 애니메이션과 투명도를 조절하는 애니메이션을 적용해야 합니다.
- 등장 애니메이션의 duration은 700ms이고, 애니메이션 사이 간격은 100ms입니다.

#### 구현하기

투명한 상태에서 살짝 떠오르면서 화면에 보이는 애니메이션을 구현하기 위해 `useFadeIn`이라는 커스텀 훅을 만들었습니다.

`IntersectionObserver`를 통해서 요소의 가시성에 변화가 생기면 콜백 함수를 실행할 수 있게 했습니다. 이 옵저버가 없이 사용한다면 그냥 콜백 안의 스타일이 적용되어버리고, 후에 트리플 홈페이지처럼 스크롤 시에 애니메이션이 적용될 수 있도록 하기 위해 이를 사용했습니다.

이 커스텀 훅은 `ref`객체와 콜백함수가 실행되기 전에 요소에 적용될 스타일을 반환하는데, 이를 통해 요소의 스타일을 따로 변경해줄 필요없이 이 훅을 통해서 간편하게 처리할 수 있습니다. 또, 제네릭 형식을 사용해서 `ref`를 통해 선택할 객체를 하나로 통일하지 않고, 확장에 개방적일 수 있도록 만들었습니다.

그리고 `duration`을 통해서 애니메이션의 지속 시간을 설정하고, `delay`를 통해서 영역별로 화면에 나타날 시간을 조절했습니다. 여기서는 요구사항에 맞게 `100ms`로 지정했습니다.

<details><summary><b>코드보기</b></summary><div markdown="1"><br />

```tsx
import { useRef, useEffect, useCallback } from 'react'

// generic 형식을 통해 타입을 후에 지정할 수 있도록 합니다.
const useFadeIn = <T extends HTMLElement>(duration = 1, delay = 0) => {
  const element = useRef<T>(null)

  // 옵저버가 실행할 콜백함수
  const fadeIn = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = element // ref로 선택한 요소

      // 관찰 대상(선택한 요소)이 보여지는 것에 변화가 생겼다면 해당 스타일 적용
      if (entry.isIntersecting && current) {
        current.style.transitionProperty = 'all'
        current.style.transitionDuration = `${duration}ms`
        current.style.transitionTimingFunction = 'ease-in'
        current.style.transitionDelay = `${delay}ms`
        current.style.opacity = '1'
        current.style.transform = 'translate3d(0, 0, 0)'
      }
    },
    [duration, delay],
  )

  useEffect(() => {
    let observer: IntersectionObserver

    // 옵저버가 관찰 시작
    if (element.current) {
      observer = new IntersectionObserver(fadeIn, { threshold: 0.7 }) // threshold를 통해 가시성이 70%일 때 실행되게 함
      observer.observe(element.current)
    }

    // 스타일을 적용하고 연결해제
    return () => observer && observer.disconnect()
  }, [fadeIn])

  return {
    ref: element,
    style: { opacity: 0, transform: 'translate3d(0, 10%, 0)' },
  }
}

export default useFadeIn
```

</div></details><br />

이제 해당 애니메이션을 적용할 컴포넌트들을 직접 제어할 수 있어야 했습니다. 그러나 컴포넌트는 `ref` 속성을 통해 직접 제어가 불가능하기 때문에, 각 컴포넌트들에 `forwardRef`로 컴포넌트를 감싸준 후에 내부의 컨테이너 요소에 `ref` 객체를 전달할 수 있도록 만들었습니다.

<details><summary><b>코드보기</b></summary><div markdown="1"><br />

```tsx
function Metrics(
  { metrics = METRIC_LIST, style }: MetricProps,
  ref: UlRefType, // ref가 여러 타입이 호환되어야 해서 따로 type폴더에 정의
) {
  return (
    <MetricsContaienr ref={ref} style={style}>
      {/* 요소 선택 및 기본 스타일 적용 */}
      {metrics.map(({ metric, unit, subject }, idx) => (
        <MetricItem key={idx} metric={metric} unit={unit} subject={subject} />
      ))}
    </MetricsContaienr>
  )
}

const Metric = forwardRef<HTMLUListElement, MetricProps>(Metrics)
```

</div></details><br />

### 4-2. 숫자가 올라가는 애니메이션

#### 요구사항

- 각 숫자는 0부터 시작합니다.
- 세 숫자 모두 2초 동안 증가하고, 동시에 끝나야합니다.
- 증가 속도가 느려지는 효과를 구현해야 합니다.
- React와 DOM API만을 이용해 구현해야 합니다.

#### 구현하기

이번에는 `useCount`라는 훅을 통해서 숫자가 올라가는 애니메이션을 구현했습니다. `setInterval` 함수를 통해서 지속적으로 값을 증가시켜 화면에 렌더링 할 수 있도록 했고, 숫자가 지정한 값에 도달하면 `clearInterval`을 통해서 증가를 멈추게 만들었습니다.

```tsx
const frameRate = Math.abs(Math.floor(duration / (end - start)))
```

문제는 세 숫자가 동시에 끝나지 않는 거였습니다. duration을 통해서 진행 시간을 정해두었는데, 이상하게 끝나는 시간이 달랐습니다. 한참을 해결하지 못하다가 원인은 `setInterval`이란 것을 알게되었습니다.

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/setInterval#delay_restrictions)을 참조하면 `setInterval`은 지연 제한이란 것을 가지고 있었습니다. `4ms` 이하로 콜백 함수가 실행되게 만들면, 성능의 영향을 미칠 수 있기에 자동으로 최소값을 `4ms`로 설정하기 때문이었습니다.

그래서 실행 간격의 값을 고정하고, 증가값을 변화시키기로 결정했습니다. 그리고 `easing` 함수를 통해서 요구사항에 따라 값이 빠르게 증가하다 증가 속도가 완화될 수 있도록 구현했습니다.

<details><summary><b>코드보기</b></summary><div markdown="1"><br/>

```tsx
const useCount = (end: number, start = 0, duration = 2000) => {
  // useRef를 사용할까 했지만, useRef는 값이 변화해도 렌더링을 일으키지 않기 때문에, 증가하는 수를 화면에 보여줄 수 없었습니다.
  const [count, setCount] = useState<number>(start)

  const frameRate = 1000 / 120 // 120프레임
  const totalFrame = Math.floor(duration / frameRate) // 총 프레임 수

  const increaseCount = useCallback(() => {
    let countNumber = start // 0

    const counter = setInterval(() => {
      // 현재값 / 총 프레임 수 -> 진행 정도를 백분율로 나타낸 값
      let progress = ++countNumber / totalFrame
      // easeOutExpo(time, start, end, duration)
      // progress(진행 정도)가 1이 되면 start+end값 반환
      progress = Math.round(easeOutExpo(progress, start, end, 1))
      setCount(progress)

      // 지정값이 되면 종료
      if (progress === end) {
        clearInterval(counter)
      }
    }, frameRate)
  }, [start, end, frameRate, totalFrame])

  useEffect(() => {
    increaseCount()
  }, [increaseCount])

  return count
}

export default useCount
```

</div></details><br />

[⬆️ Back to top](#목차)
<br />

## :open_file_folder: 5. 디렉토리 구조

```bash
.
├── .github
├── .husky
├── .storybook
├── public
└── src
    ├── components
    │   ├── layout
    │   │   └── section-layout
    │   └── section
    │       ├── responsive-section
    │       ├── section-container
    │       └── statistic-section
    │           ├── awards
    │           ├── content-logo
    │           └── metrics
    ├── constants
    ├── hooks
    ├── pages
    ├── styles
    ├── types
    └── utils
```

폴더 구조에 대해 고민을 많이했지만, 제대로 구조를 나누지 못한 것 같습니다. 한 섹션만을 구현하다보니, 공통으로 사용할 만한 컴포넌트를 뽑아내기 어려웠고, page가 나누어져 있지 않기 때문에 컴포넌트들을 나누기 더 어려웠던 것 같습니다. 많이 아쉬움이 남지만 차후 수정해보도록 하겠습니다.
