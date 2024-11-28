import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import AdUnit from './AdUnit';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {children}
        
        <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Supercharge Your Development Workflow
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Experience the power of AI-driven development assistance that adapts to your coding style.
                Our intelligent system learns from your patterns and preferences to provide increasingly
                accurate and relevant suggestions over time.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li>Smart code completion and refactoring suggestions</li>
                <li>Real-time error detection and debugging assistance</li>
                <li>Context-aware documentation and best practices</li>
                <li>Intelligent code analysis and optimization recommendations</li>
                <li>Advanced pattern recognition for better code quality</li>
                <li>Automated testing and validation suggestions</li>
              </ul>
            </div>
            
            {/* Only show ad in content-rich section */}
            <div className="my-12">
              <AdUnit className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100" />
            </div>
            
            <div className="prose max-w-none mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Built for Modern Development
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Stay ahead of the curve with our continuously updated AI model that keeps pace with
                the latest development trends, frameworks, and best practices. Whether you're working
                with modern frameworks or maintaining legacy code, our assistant provides valuable
                insights and suggestions to improve your codebase.
              </p>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Key Benefits</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>Increased development speed and efficiency</li>
                  <li>Reduced technical debt and improved code maintainability</li>
                  <li>Better code quality and fewer bugs</li>
                  <li>Enhanced team collaboration and knowledge sharing</li>
                  <li>Continuous learning and improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}