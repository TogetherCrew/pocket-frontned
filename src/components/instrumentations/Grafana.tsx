import Script from 'next/script';

export const GrafanaInstrumentation = () => {
  if (process.env.NEXT_PUBLIC_GRAFANA_ENABLED !== 'true') return null;

  return (
    <Script defer id="grafana-instrumentation" strategy="lazyOnload">
      {`
        (function () {
          var webSdkScript = document.createElement('script');
        
          webSdkScript.src =
            'https://unpkg.com/@grafana/faro-web-sdk@^1.0.0/dist/bundle/faro-web-sdk.iife.js';
        
          webSdkScript.onload = () => {
            window.GrafanaFaroWebSdk.initializeFaro({
              url: 'https://faro-collector-prod-us-central-0.grafana.net/collect/${process.env.NEXT_PUBLIC_GRAFANA_ID}',
              app: {
                name: 'pocket-network-test',
                version: '0.1.0',
                environment: 'production',
              },
            });
        
            // Load instrumentations at the onLoad event of the web-SDK and after the above configuration.
            // This is important because we need to ensure that the Web-SDK has been loaded and initialized before we add further instruments!
            var webTracingScript = document.createElement('script');
        
            webTracingScript.src =
              'https://unpkg.com/@grafana/faro-web-tracing@^1.0.0/dist/bundle/faro-web-tracing.iife.js';
        
            // Initialize, configure (if necessary) and add the the new instrumentation to the already loaded and configured Web-SDK.
            webTracingScript.onload = () => {
              window.GrafanaFaroWebSdk.faro.instrumentations.add(
                new window.GrafanaFaroWebTracing.TracingInstrumentation(),
              );
            };
        
            // Append the Web Tracing script script tag to the HTML page
            document.head.appendChild(webTracingScript);
          };
        
          // Append the Web-SDK script script tag to the HTML page
          document.head.appendChild(webSdkScript);
        })();
      `}
    </Script>
  );
};
