import clsx from 'clsx'

const circleStyles = 'rounded-full w-[200px] h-[200px] bg-opacity-40 absolute z-1'
const wrapperStyles = 'relative w-[320px] h-[320px] rotate-[17deg]'

const p1Styles = 'absolute z-2 left-[-30px] top-[-40px] whitespace-nowrap rotate-[-17deg] text-sky-600'
const p2Styles = 'absolute z-2 left-[240px] top-[calc(50%-24px)] whitespace-nowrap rotate-[-17deg] text-amber-600'
const p3Styles = 'absolute z-2 left-[-30px] top-[240px] whitespace-nowrap rotate-[-17deg] text-emerald-600'
const iWorkHereStyles = 'absolute left-[290px] top-[-35px] whitespace-nowrap rotate-[-17deg] text-primary-600 font-semibold'

const arrowWrapperStyles = 'absolute z-3 left-[70px] top-[36px] overflow-hidden w-[230px] h-[100px] rotate-[-23deg]'
const arrowStyles = 'w-[500px] h-[500px] border-2  border-primary-600 rounded-full border-l-0 border-r-0 border-b-0'
const pointerStyles = 'absolute left-[140px] top-[146px] border border-primary-600 p-[6px] border-t-0 border-r-0 border-b-1 border-l-1 rotate-[-30deg]'

export const Chart = () => {
  return (
    <div className="pl-[90px] pr-[142px] pt-[65px] pb-[25px]">
      <div className={wrapperStyles}>
        <div className={clsx(
          circleStyles,
          'bg-sky-600 top-0 left-0'
        )}>
          <div className={p1Styles}>Strategic Planning</div>
        </div>
        <div className={clsx(
          circleStyles,
          'bg-amber-600 right-0 top-[60px]'
        )}>
          <div className={p2Styles}>
          Technical Debt<br />Management
          </div>
        </div>
        <div className={clsx(
          circleStyles,
          'bg-emerald-600 bottom-0 left-0'
        )}>
          <div className={p3Styles}>Technology Evaluation</div>
        </div>
        <div className={arrowWrapperStyles}>
          <div className={arrowStyles}></div>
        </div>
        <div className={pointerStyles}></div>
        <div className={iWorkHereStyles}>I Work Here</div>
      </div>
    </div>
  )
}