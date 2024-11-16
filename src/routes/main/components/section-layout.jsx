import { cn } from 'utils/cn';

export const SectionLayout = ({
  children,
  outerLayerClassName: _outerLayerClassName,
  innerLayerRef,
  innerLayerClassName: _innerLayerClassName,
}) => {
  const outerLayerClassName = cn(
    'flex items-center justify-start w-screen min-h-screen mobile:min-h-[120vh] border-b',
    _outerLayerClassName,
  );

  const innerLayerClassName = cn(
    'relative px-[20vw] mobile:px-[5vw] w-full flex flex-col justify-center items-center py-[10vh] mobile:py-[5vh]',
    _innerLayerClassName,
  );

  return (
    <div className={outerLayerClassName}>
      <div
        ref={innerLayerRef}
        className={innerLayerClassName}
      >
        {children}
      </div>
    </div>
  );
};